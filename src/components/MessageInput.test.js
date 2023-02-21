import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageInput from "./MessageInput";
const mockSendMessage = jest.fn();

test("loads input form button", () => {
  render(<MessageInput />);
  expect(screen.getByLabelText("input")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Send");
});

test("test user action", () => {
  render(<MessageInput sendMessage={mockSendMessage} />);
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.type(screen.getByLabelText("input"), "Hello World!");
    userEvent.click(screen.getByRole("button"));
  });
  expect(mockSendMessage.mock.calls).toHaveLength(1);
  expect(mockSendMessage.mock.calls[0][0]).toBe("Hello World!");
});
