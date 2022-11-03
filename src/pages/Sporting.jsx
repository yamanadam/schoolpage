import React from "react";

const Sporting = () => {
  return (
    <div className="container text-center mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Sporting Award</th>
            <th scope="col">Section</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Otto</td>
            <td>Gold Medal</td>
            <td>Taekwondo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob Thornton</td>
            <td>Gold Medal</td>
            <td>Wrestle</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>School Team</td>
            <td>Bronz Medal</td>
            <td>Basketball</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sporting;
