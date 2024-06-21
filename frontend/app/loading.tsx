export default function Loading () {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
          <h1 style={{color: "red", fontSize: 50}}>FOO</h1>
        </div>
      </div>
    );
  };
  