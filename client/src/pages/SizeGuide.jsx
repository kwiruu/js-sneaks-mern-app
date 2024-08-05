const SizeGuide = () => {
  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Shoe Size Guide</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">US Size</th>
              <th className="border border-gray-200 px-4 py-2">UK Size</th>
              <th className="border border-gray-200 px-4 py-2">EU Size</th>
              <th className="border border-gray-200 px-4 py-2">CM</th>
            </tr>
          </thead>
          <tbody>
            {[
              { us: '6', uk: '5.5', eu: '39', cm: '24.5' },
              { us: '6.5', uk: '6', eu: '39.5', cm: '25' },
              { us: '7', uk: '6.5', eu: '40', cm: '25.5' },
              { us: '7.5', uk: '7', eu: '40.5', cm: '26' },
              { us: '8', uk: '7.5', eu: '41', cm: '26.5' },
              { us: '8.5', uk: '8', eu: '42', cm: '27' },
              { us: '9', uk: '8.5', eu: '42.5', cm: '27.5' },
              { us: '9.5', uk: '9', eu: '43', cm: '28' },
              { us: '10', uk: '9.5', eu: '44', cm: '28.5' },
              { us: '10.5', uk: '10', eu: '44.5', cm: '29' },
              { us: '11', uk: '10.5', eu: '45', cm: '29.5' },
              { us: '11.5', uk: '11', eu: '45.5', cm: '30' },
              { us: '12', uk: '11.5', eu: '46', cm: '30.5' },
            ].map((size, index) => (
              <tr key={size.us} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border border-gray-200 px-4 py-2">{size.us}</td>
                <td className="border border-gray-200 px-4 py-2">{size.uk}</td>
                <td className="border border-gray-200 px-4 py-2">{size.eu}</td>
                <td className="border border-gray-200 px-4 py-2">{size.cm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeGuide;
