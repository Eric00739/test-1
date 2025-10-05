export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          FastFun Remote
        </h1>
        <p className="text-xl text-gray-600">
          Orange Theme Test Page
        </p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <p className="text-gray-700">
            ✓ Website successfully updated to orange theme
          </p>
          <p className="text-gray-700">
            ✓ All components working correctly
          </p>
        </div>
      </div>
    </div>
  )
}