const UserPopUp = ({ user, guardians, closeUserPopUp }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white border-2 border-black rounded-lg p-6 w-96 shadow-xl">
          <div className="flex justify-end">
            <button
              onClick={() => closeUserPopUp()}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-lg font-semibold mb-4">{user}'s Guardian</h2>

          <div className="mb-4">
            <ul>
              {guardians.map((guardian, index) => (
                <li key={index}>
                  <div>
                    <strong>Name:</strong> {guardian.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {guardian.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {guardian.phone}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPopUp;
