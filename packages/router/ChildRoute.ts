import React from 'react';

interface AssetsProps {
  js: string[]
  css: string[]
}

interface ChildRouteProps {
  path: string
  assets: AssetsProps
  html: string
  // exact: true
}

const ChildRoute = (props: ChildRouteProps) => {
  const {
    path: string
    assets: AssetsProps
    html: string
  } = props;
  return null;
}

export default ChildRoute