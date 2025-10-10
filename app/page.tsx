import { Suspense } from 'react';
import HomeClientWrapper from './components/HomeClientWrapper';
import ClientHeader from "@/components/ClientHeader";

export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HomeClientWrapper searchParams={searchParams} />
    </Suspense>
  );
}
