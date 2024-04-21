import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/app/page';
import MessageInput from '@/components/MessageInput';
import NameInput from '@/components/NameInput';
import { MessagesProvider } from '@/hooks/useMessages';
import { NameProvider } from '@/hooks/useName';

describe('Rendering', () => {
  it('renders an app intro with "This is" text and "intro" class', () => {
    render(<App />);
    const intro = screen.getByText(/This is/);
    expect(intro).toBeInTheDocument();
    expect(intro).toHaveClass('intro');
  });

  it('renders a div to display name with "Your name is" text and "label" class', () => {
    render(<App />);
    const nameDisplay = screen.getByText(/Your name is/);
    expect(nameDisplay).toBeInTheDocument();
    expect(nameDisplay).toHaveClass('label');
  });

  it('renders a name input with "Update name here..." placeholder and "input" class', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('Update name here...');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveClass('input');
  });

  it('renders an update button for the name input with "button" class', () => {
    render(
      <NameProvider>
        <NameInput />
      </NameProvider>
    );
    const updateNameButton = screen.getByTestId('updateNameButton');
    expect(updateNameButton).toBeInTheDocument();
    expect(updateNameButton).toHaveClass('button');
  });

  it('renders a message input with "Type your message here..." placeholder and "input" class', () => {
    render(<App />);
    const messageInput = screen.getByPlaceholderText(
      'Type your message here...'
    );
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveClass('input');
  });

  it('renders a send button for the message input with "button" class', () => {
    render(
      <MessagesProvider>
        <MessageInput />
      </MessagesProvider>
    );
    const sendMessageButton = screen.getByTestId('sendMessageButton');
    expect(sendMessageButton).toBeInTheDocument();
    expect(sendMessageButton).toHaveClass('button');
  });

  it('renders a message list with list class', () => {
    render(<App />);
    const messageList = screen.getByTestId('messageList');
    expect(messageList).toBeInTheDocument();
    expect(messageList).toHaveClass('list');
  });
});

describe('Interactions', () => {
  test('typing in name input and hitting the update button updates name', async () => {
    const user = userEvent.setup();
    render(<App />);
    const nameInput = screen.getByPlaceholderText('Update name here...');
    const updateNameButton = screen.getByTestId('updateNameButton');
    await user.type(nameInput, 'Rafael');
    await user.click(updateNameButton);
    expect(screen.getByText(/Rafael/)).toBeInTheDocument();
  });

  test('typing in message input and hitting the send button updates message list', async () => {
    const user = userEvent.setup();
    render(<App />);
    const messageInput = screen.getByPlaceholderText(
      'Type your message here...'
    );
    const sendMessageButton = screen.getByTestId('sendMessageButton');
    await user.type(messageInput, 'Hello');
    await user.click(sendMessageButton);
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
});
