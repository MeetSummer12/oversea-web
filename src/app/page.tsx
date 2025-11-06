import {redirect} from 'next/navigation';

export default function Home() {
  // Server-side redirect from root to default locale
  redirect('/en');
}
