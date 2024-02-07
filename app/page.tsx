import SideBar from '../components/containers/SideBar';
import NavMenu from '../components/containers/NavMenu';
import Content from '../components/containers/Content';
import Footer from '../components/containers/Footer';

export default function Home() {
  return (
    <main className='flex'>
      <SideBar />
      <div className='fixed right-0 w-[80vw] flex flex-col'>
        <NavMenu />
        <Content />
        <Footer />
      </div>
    </main>
  );
}
