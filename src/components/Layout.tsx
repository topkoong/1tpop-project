import { FunctionComponent, PropsWithChildren } from 'react';

import Navbar from '@components/Navbar';

const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
