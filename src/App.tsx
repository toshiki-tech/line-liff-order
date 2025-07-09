// src/App.tsx（简化版）
import { useEffect, useState } from 'react';
import liff from '@line/liff';

function App() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    liff.ready.then(async () => {
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        setProfile(profile);
      }
    });
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">スカイフューチャーコーヒー 注文</h1>
      {profile ? (
        <div className="mt-4">
          <img src={profile.pictureUrl} alt="avatar" className="w-24 h-24 rounded-full mx-auto" />
          <p className="mt-2">こんにちは、{profile.displayName}さん！</p>
        </div>
      ) : (
        <p className="mt-4">ログイン中...</p>
      )}
    </div>
  );
}

export default App;