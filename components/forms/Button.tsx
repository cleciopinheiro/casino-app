interface ButtonProps {
  text: string;
  style?: string;
}

function Button({ text, style }: ButtonProps) {
  return (
    <button type="button" className={`px-4 py-2 bg-[var(--orange)] hover:bg-[var(--hover-orange)] rounded-md ${style}`}>
      {text}
    </button>
  );
}

export default Button;