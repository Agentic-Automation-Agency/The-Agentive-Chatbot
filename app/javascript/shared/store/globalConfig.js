import { parseBoolean } from '@chatwoot/utils';
import { resolveMaximumFileUploadSize } from 'shared/helpers/FileHelper';

// Technical/System values (Remain as they were)
const {
  API_CHANNEL_NAME: apiChannelName,
  APP_VERSION: appVersion,
  AZURE_APP_ID: azureAppId,
  CHATWOOT_INBOX_TOKEN: chatwootInboxToken,
  CREATE_NEW_ACCOUNT_FROM_DASHBOARD: createNewAccountFromDashboard,
  DIRECT_UPLOADS_ENABLED: directUploadsEnabled,
  DISPLAY_MANIFEST: displayManifest,
  GIT_SHA: gitSha,
  MAXIMUM_FILE_UPLOAD_SIZE: maximumFileUploadSize,
  HCAPTCHA_SITE_KEY: hCaptchaSiteKey,
  IS_ENTERPRISE: isEnterprise,
  DISABLE_USER_PROFILE_UPDATE: disableUserProfileUpdate,
  DEPLOYMENT_ENV: deploymentEnv,
} = window.globalConfig || {};

// Branding & Legal values (Updated to fetch from .env as fallback)
const brandName = 'Brand Name' || import.meta.env.VITE_BRAND_NAME;
const logoThumbnail = import.meta.env.VITE_BRAND_LOGO_THUMBNAIL;
const widgetBrandURL = import.meta.env.VITE_BRAND_URL;
const installationName = import.meta.env.VITE_BRAND_NAME;
const apiChannelThumbnail = import.meta.env.VITE_BRAND_LOGO_THUMBNAIL;
const logo = import.meta.env.VITE_BRAND_LOGO_THUMBNAIL_LARGE;
const logoDark = import.meta.env.VITE_BRAND_LOGO_THUMBNAIL_LARGE;
const privacyURL = import.meta.env.VITE_PRIVACY_URL;
const termsURL = import.meta.env.VITE_TERMS_URL;

const state = {
  apiChannelName,
  apiChannelThumbnail,
  appVersion,
  azureAppId,
  brandName,
  chatwootInboxToken,
  deploymentEnv,
  createNewAccountFromDashboard,
  directUploadsEnabled: parseBoolean(directUploadsEnabled),
  disableUserProfileUpdate: parseBoolean(disableUserProfileUpdate),
  displayManifest,
  gitSha,
  maximumFileUploadSize: resolveMaximumFileUploadSize(maximumFileUploadSize),
  hCaptchaSiteKey,
  installationName,
  logo,
  logoDark,
  logoThumbnail,
  privacyURL,
  termsURL,
  widgetBrandURL,
  isEnterprise: parseBoolean(isEnterprise),
};

export const getters = {
  get: $state => $state,
  isOnChatwootCloud: $state => $state.deploymentEnv === 'cloud',
  isACustomBrandedInstance: $state => $state.installationName !== 'Chatwoot',
  isAChatwootInstance: $state => $state.installationName === 'Chatwoot',
};

export const actions = {};
export const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
