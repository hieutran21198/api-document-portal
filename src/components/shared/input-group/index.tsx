import styled from "@emotion/styled";

const S = {
  InputGroup: styled.div`
    display: grid;
    grid-auto-rows: max-content;
    input {
      width: 100%;
      font-size: 1em;
      font-weight: 500;
      padding: 0.6em 1.2em;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: border-color 0.25s;
      background: ${({ theme }) => theme.preset.backgroundInput};
      :placeholder {
        color: ${({ theme }) => theme.preset.colorMuted};
      }
      :hover {
        border-color: ${({ theme }) => theme.preset.colorBorder};
      }
      :focus,
      :focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
    }
    gap: ${({ theme }) => theme.spacing(0.5)};
  `,
};

export type InputGroupProps = {
  className?: string;
  inputClassName?: string;
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const InputGroup = ({
  className,
  inputClassName,
  label,
  ...inputProps
}: InputGroupProps) => {
  return (
    <S.InputGroup className={className}>
      <label>{label}</label>
      <input className={inputClassName} {...inputProps} />
    </S.InputGroup>
  );
};
