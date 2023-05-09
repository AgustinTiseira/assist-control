import NavBar from '@/components/nav/NavBar';
import Principal from '@/containers/home/Principal';

const pages = ['Home', 'About', 'Projects', 'Contact'];
const settings = ['Theme', 'Font', 'Language'];
const userInfo = { name: 'Jhon Doe' };

export default function Home() {
  return (
    <main className={`flex  min-w-screen flex-col `}>
      <NavBar
        pages={pages}
        settings={settings}
        userInfo={userInfo}
        logged={false}
      />
      <Principal />
    </main>
  );
}
