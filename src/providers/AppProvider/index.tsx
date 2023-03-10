import { UserProvider } from "../UserProvider";
type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};
