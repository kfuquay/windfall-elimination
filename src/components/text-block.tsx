import styled from "@emotion/styled";
import { breakPoints, fontSizes, spacing } from "../constants";

export const TextBlock = styled("div")`
    text-align: justify;
    font-size: ${fontSizes[1]};
    max-width: ${breakPoints[3]};
    margin: ${spacing[2]} 0;
`;
