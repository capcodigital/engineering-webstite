import * as React from "react";
import { render, screen } from "@testing-library/react";
import ContentComponent from "../index";

describe('Content Component tests', () => {
    it('Should render Content Component with subtitle & content', () => {
        render(<ContentComponent />);
        expect(screen.getByTestId('subtitle')).toBeInTheDocument();
        expect(screen.getByTestId('content')).toBeInTheDocument();
        // Button is optional within this component - should be taken out into it's own separate component?
        // expect(screen.getByRole('button', {name: /learn more/i})).toBeInTheDocument()
    });
});