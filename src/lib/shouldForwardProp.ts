import isPropValid from '@emotion/is-prop-valid';
import { ComponentType } from 'react';

// This implements the default behavior from styled-components v5
//@ts-ignore
export default function shouldForwardProp(propName, target) {
    if (typeof target === "string") {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
}
