import styled from "@emotion/styled";

interface TextProps {
    color?: string;
    size?: string;
    weight?: string;
}

const Text = styled.span<TextProps>(({color = 'black', size = '16px', weight = '400'}) => ({
    color,
    fontSize: size,
    fontWeight: weight,
}))

export default Text;