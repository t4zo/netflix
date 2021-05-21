import { IMedia } from 'interfaces';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface IFeatureContext {
  itemFeature: IMedia | null;
  setItemFeature: Dispatch<SetStateAction<any>>;
}

const FeatureContext = createContext<IFeatureContext>({
  itemFeature: null,
  setItemFeature: () => null,
});

export function FeatureContextProvider({ children }: Props) {
  const [itemFeature, setItemFeature] = useState(null);

  return <FeatureContext.Provider value={{ itemFeature, setItemFeature }}>{children}</FeatureContext.Provider>;
}

export default FeatureContext;
