import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"
import { ThemeProvider } from "@fluentui/react-theme-provider";

import { loadTheme } from '@fluentui/react';

loadTheme({
    defaultFontStyle: { fontFamily: 'Poppins', fontWeight: 'regular' },
    fonts: {
        small: {
            fontSize: '11px',
        },
        medium: {
            fontSize: '13px',
        },
        large: {
            fontSize: '20px',
            fontWeight: 'semibold',
        },
        xLarge: {
            fontSize: '22px',
            fontWeight: 'semibold',
        },
    },
});

const appTheme = {
    palette: {
        themePrimary: '#0c8534',
        themeLighterAlt: '#f1faf4',
        themeLighter: '#c9ebd5',
        themeLight: '#9fdab3',
        themeTertiary: '#52b673',
        themeSecondary: '#1d9345',
        themeDarkAlt: '#0b772f',
        themeDark: '#096528',
        themeDarker: '#074a1d',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#000000',
        white: '#ffffff',
    },
    typography: {
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    }
};

const Layout = ({ children }) => (
    <ThemeProvider theme={appTheme}>
        <div>
            <Helmet title="Simple Authentication With Gatsby" />
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    </ThemeProvider>
)

export default Layout
