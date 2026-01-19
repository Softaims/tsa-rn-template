import { ConfigContext, ExpoConfig } from "expo/config";
import { name, version } from "./package.json";

type AppEnvironment = "development" | "preview" | "production";

/**
 * Calculate build number from semantic version
 * Format: MMNNPP0000 (Major 2 digits + Minor 2 digits + Patch 2 digits + 0000)
 * Example: 7.17.10 → 717100000
 * Example: 1.2.3 → 102030000
 */
const calculateBuildNumber = (ver: string): number => {
    // Remove prerelease suffix if present (e.g., 1.2.3-dev.1 -> 1.2.3)
    const cleanVersion = ver.replace(/-.*$/, '');

    const [major, minor, patch] = cleanVersion.split('.').map(Number);
    return major * 100000000 + minor * 1000000 + patch * 10000;
};

// ********** App configuration **********
const APP_NAME = name;
const SLUG = "";
const SCHEMA = "";
const BUNDLE_IDENTIFIER = "";
const PACKAGE_NAME = "";

// ********** EAS configuration **********
const EAS_PROJECT_ID = ""; // From EAS dashboard
const EAS_PROJECT_OWNER = ""; // For EAS organization (not required for personal projects)

export default ({ config }: ConfigContext): ExpoConfig => {
    const buildNumber = calculateBuildNumber(version);

    console.log(`⚒️ Building: [NAME: ${APP_NAME}, VERSION: ${version}, BUILD: ${buildNumber}, ENV: ${process.env.APP_ENV || "unset"}]`);
    const { name, bundleIdentifier, packageName } =
        getDynamicAppConfig(
            (process.env.APP_ENV as AppEnvironment) ||
            "development"
        );

    return {
        ...config,
        version,
        name,
        slug: SLUG,
        owner: EAS_PROJECT_OWNER,
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        newArchEnabled: true,
        orientation: "portrait",
        splash: {
            image: "./assets/splash-icon.png",
            resizeMode: "contain"
        },
        ios: {
            supportsTablet: false,
            buildNumber: String(buildNumber),
            bundleIdentifier,
        },
        android: {
            versionCode: buildNumber,
            adaptiveIcon: {
                foregroundImage: "./assets/icon.png",
                backgroundColor: "#ffffff"
            },
            package: packageName,
            permissions: []
        },
        web: {
            favicon: "./assets/icon.png"
        },
        plugins: [],
        scheme: SCHEMA,
        updates: {
            url: `https://u.expo.dev/${EAS_PROJECT_ID}`
        },
        runtimeVersion: version,
        platforms: ["ios", "android"],
        extra: {
            eas: {
                projectId: EAS_PROJECT_ID
            }
        }
    };
};

// ********** Dynamic app configuration **********
// NOTE: Implement this if you have multiple environments.
export const getDynamicAppConfig = (
    environment: AppEnvironment
) => {
    // if (environment === "production") {
    return {
        name: APP_NAME,
        bundleIdentifier: BUNDLE_IDENTIFIER,
        packageName: PACKAGE_NAME
    };
    // }

    // if (environment === "preview") {
    //     return {
    //         name: `(Preview) ${APP_NAME}`,
    //         bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
    //         packageName: `${PACKAGE_NAME}.preview`
    //     };
    // }

    // return {
    //     name: `(Dev) ${APP_NAME}`,
    //     bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    //     packageName: `${PACKAGE_NAME}.dev`
    // };
};
