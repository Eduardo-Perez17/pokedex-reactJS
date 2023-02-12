import { Outlet } from 'react-router-dom';

const LayaoutOtherPageApp = () => {
  return (
    <>
      <h1>HEADER</h1>
      <Outlet />
      <h1>FOOTER</h1>
    </>
  );
};

export default LayaoutOtherPageApp;
