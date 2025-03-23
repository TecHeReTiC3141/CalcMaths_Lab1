import { SolutionData } from "../utils.ts";

type SolutionProps = {
    solution: SolutionData;
};

export function Solution ({ solution }: SolutionProps) {
    if (solution.iters.length === 0) return <p className="text-gray-500 text-center">No iterations available.</p>;

    const columns = ['iters', ...Object.keys(solution.iters[0])];

    return (
      <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Solution</h2>
          <p className="text-center text-lg text-gray-700 mb-4">
              <span className="font-medium text-blue-600">Answer:</span> {solution.ans}
              <span className="font-medium text-blue-600 ml-2">Iterations:</span> {solution.iters.length}
          </p>
          <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                  <thead className="bg-blue-500 text-white">
                  <tr>
                      {columns.map((col) => (
                        <th key={col} className="px-4 py-2 text-left uppercase tracking-wider">
                            {col}
                        </th>
                      ))}
                  </tr>
                  </thead>
                  <tbody>
                  {solution.iters.map((iter, rowIndex) => (
                    <tr key={rowIndex} className="border-b hover:bg-gray-100 transition">
                      <td key={rowIndex} className="px-4 py-2 text-gray-800">
                        {rowIndex + 1}
                      </td>
                      {columns.slice(1).map((col) => (
                        <td key={col} className="px-4 py-2 text-gray-800">
                          {iter[ col ]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
    );
};
