import React from "react";
import { render, screen } from "@testing-library/react";
// import * as reactRouter from "react-router-dom";
import { LandingPage } from "../src/LandingPage";
import * as reactRouter from "react-router-dom";

jest.mock("react-router-dom");

const locationSpy = jest.spyOn(reactRouter, "useLocation");
reactRouter.useHistory = () => [];
const historySpy = jest.spyOn(reactRouter, "useHistory");
const localStorageSpy = jest.spyOn(Storage.prototype, "setItem");

describe("LandingPage", () => {
    describe("Without Credentials", () => {
        beforeEach(() => {
            locationSpy.mockReturnValue({ pathname: "/", hash: "" });
            historySpy.mockReturnValue([]);
        });

        afterEach(() => {
            jest.resetAllMocks();
            jest.resetModules();
        });

        it("renders home page", () => {
            render(<LandingPage />);

            expect(screen.getByTestId("home-page")).not.toBeNull();
        });

        it("renders getting started button", () => {
            render(<LandingPage />);

            expect(screen.getByTestId("getting-started-button")).not.toBeNull();
        });
    });

    describe("With Credentials", () => {
        beforeEach(() => {
            locationSpy.mockReturnValue({
                pathname: "/callback",
                hash: "#access_token=butterscotch&token_type=Bearer&expires_in=3600",
            });
            historySpy.mockReturnValue([]);
        });

        afterEach(() => {
            jest.clearAllMocks();
            jest.resetModules();
        });

        it("sets local storage with credentials", () => {
            render(<LandingPage />);

            expect(localStorageSpy).toHaveBeenCalledTimes(3);
            expect(localStorageSpy).toHaveBeenCalledWith("accessToken", "butterscotch");
            expect(localStorageSpy).toHaveBeenCalledWith("tokenType", "Bearer");
        });
    });
});
