export default function Profile() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-800 to-transparent dark:from-red-800">
      {/* Content below navbar */}
      <div className="pt-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Left Side - Profile Picture */}
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-lg border-4 border-white/20 shadow-lg w-48 h-48 object-cover"
                src="/images/profile.JPG"
                alt="Profile Picture"
                loading="eager"
              />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-4">
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                  <h2 className="text-lg font-semibold text-blue-200 mb-2">
                    Profil
                  </h2>
                  <p className="text-white text-xl">
                    Muhammad Radithya Naufal | 103012300188
                  </p>
                  <p className="text-white text-xl">Informatika</p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                  <h2 className="text-lg font-semibold text-blue-200 mb-2">
                    Github Profile
                  </h2>
                  <a
                    className="text-white text-xl"
                    href="https://github.com/dhitera"
                    target="_blank"
                  >
                    https://github.com/dhitera
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
