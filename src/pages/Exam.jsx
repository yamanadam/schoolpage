const Exam = () => {
  return (
    <div className="container text-center mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">YKS Ranking</th>
            <th scope="col">University</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Otto</td>
            <td>15</td>
            <td>ODTÜ</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob Thornton</td>
            <td>121</td>
            <td>İTÜ</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry Bird</td>
            <td>298</td>
            <td>ODTÜ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Exam;
