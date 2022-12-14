import styled from "@emotion/styled";

const S = {
  Button: styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: ${({ theme }) => theme.preset.backgroundBtn};
    color: ${({ theme }) => theme.preset.color};
    cursor: pointer;
    transition: border-color 0.25s;
    :hover {
      border-color: ${({ theme }) => theme.preset.colorBorder};
    }
    :focus,
    :focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `,
};

export type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return <S.Button {...props}></S.Button>;
};
