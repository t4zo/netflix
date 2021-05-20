import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface IFeatureContext {
  showFeature: boolean;
  setShowFeature: Dispatch<SetStateAction<boolean>>;
  itemFeature: any;
  setItemFeature: Dispatch<SetStateAction<any>>;
}

const FeatureContext = createContext<IFeatureContext>({
  showFeature: false,
  itemFeature: null,
  setShowFeature: () => false,
  setItemFeature: () => {},
});

export function FeatureContextProvider({ children }: Props) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>{children}</FeatureContext.Provider>;
}

export default FeatureContext;
