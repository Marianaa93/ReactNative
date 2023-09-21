import { TextInputProps } from "react-native";
import * as Styled from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return (
    <Styled.Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
