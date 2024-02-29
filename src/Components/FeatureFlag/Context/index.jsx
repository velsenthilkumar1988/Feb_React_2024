import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlag, setEnabledFlag] = useState(null);

    async function fetchFeatureFlags(){
        try{
            setLoading(true)
            const response = await featureFlagsDataServiceCall();
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            setEnabledFlag(response);
            setLoading(false)
        }catch(err){
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            setLoading(false);
            throw new Error(err);
            
        }
    }

    useEffect(()=>{
        fetchFeatureFlags();
    },[]);

  return (
    <FeatureFlagContext.Provider value={{loading, enabledFlag}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
