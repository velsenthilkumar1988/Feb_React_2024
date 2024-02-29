import { useContext } from "react";
import GitHubProfileFinder from "../GitHubProfileFinder";
import LightDarkTheme from "../LightDarkTheme";
import QRCodeGenerator from "../QRCodeGenerator";
import StarRating from "../Star-Rating";
import TreeView from "../Tree-View";
import { FeatureFlagContext } from "./Context";
import sideMenu from "../Tree-View/data";

export default function FeatureFlags() {
  const { loading, enabledFlag } = useContext(FeatureFlagContext);
  const ComponentToRender = [
    {
      key: "showLightAndDarkTheme",
      component: <LightDarkTheme />,
    },
    {
      key: "showQRCodeScan",
      component: <QRCodeGenerator />,
    },
    {
      key: "showGitHubProfileFinder",
      component: <GitHubProfileFinder />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={sideMenu}/>,
    },
    {
      key: "showStartRating",
      component: <StarRating />,
    },
  ];
  function checkEnabledFlags(getCurrentKey) {
    return enabledFlag[getCurrentKey];
  }
  if (loading) {
    return <h1>Loading data! Please Wait....</h1>;
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {ComponentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
