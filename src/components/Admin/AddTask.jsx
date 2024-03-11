import React from 'react'

const AddTask = () => {
  return (
    <div>
      <div className="col-md-12 ">
  <div className="card table-big-boy">
    <div className="card-header ">
      <h4 className="card-title">Table Big Boy</h4>
      <p className="card-category">A table for content management</p>
      <br />
    </div>
    <div className="card-body" style={{padding:"15px 60px 10px 15px"}}>
      <table className="table table-bigboy">
        <thead>
          <tr>
            <th className="text-center">Thumb</th>
            <th>Blog Title</th>
            <th className="th-description">Description</th>
            <th className="text-right">Date</th>
            <th className="text-right">Views</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="img-container">
                <img src="../../assets/img/blog-1.jpg" alt="..." />
              </div>
            </td>
            <td className="td-name">10 Things that all designers do</td>
            <td>
              Most beautiful agenda for the office, really nice paper and black
              cover. Most beautiful agenda for the office.
            </td>
            <td className="td-number">30/08/2016</td>
            <td className="td-number">1,225</td>
            <td className="td-actions" style={{ display: "flex", flexDirection: "column" }}>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-info btn-link btn-icon"
      data-original-title="View Post"
    >
      <i className="fa fa-image" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-success btn-link btn-icon"
      data-original-title="Edit Post"
    >
      <i className="fa fa-edit" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-danger btn-link btn-icon"
      data-original-title="Remove Post"
    >
      <i className="fa fa-times" />
    </button>
  </div>
</td>
          </tr>
          <tr>
            <td>
              <div className="img-container">
                <img src="../../assets/img/blog-2.jpg" alt="..." />
              </div>
            </td>
            <td className="td-name">Back to School Offer</td>
            <td>
              Design is not just what it looks like and feels like. Design is
              how it works.
            </td>
            <td className="td-number">17/07/2016</td>
            <td className="td-number">49,302</td>
            <td className="td-actions" style={{ display: "flex", flexDirection: "column" }}>
            <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-info btn-link btn-icon"
      data-original-title="View Post"
    >
      <i className="fa fa-image" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-success btn-link btn-icon"
      data-original-title="Edit Post"
    >
      <i className="fa fa-edit" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-danger btn-link btn-icon"
      data-original-title="Remove Post"
    >
      <i className="fa fa-times" />
    </button>
  </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="img-container">
                <img src="../../assets/img/blog-3.jpg" alt="..." />
              </div>
            </td>
            <td className="td-name">First Dribbble Meetup in Romania</td>
            <td>
              A groundbreaking Retina display. All-flash architecture.
              Fourth-generation Intel processors.
            </td>
            <td className="td-number">23/06/2016</td>
            <td className="td-number">1,799</td>
            <td className="td-actions" style={{ display: "flex", flexDirection: "column" }}>
            <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-info btn-link btn-icon"
      data-original-title="View Post"
    >
      <i className="fa fa-image" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-success btn-link btn-icon"
      data-original-title="Edit Post"
    >
      <i className="fa fa-edit" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-danger btn-link btn-icon"
      data-original-title="Remove Post"
    >
      <i className="fa fa-times" />
    </button>
  </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="img-container">
                <img src="../../assets/img/blog-4.jpg" alt="..." />
              </div>
            </td>
            <td className="td-name">How we created our startup with 0$</td>
            <td>
              A desk is a generally wooded piece of furniture and a type of
              useful table often used in a school or office setting for various
              academic or professional activities ...
            </td>
            <td className="td-number">30/06/2016</td>
            <td className="td-number">23,030</td>
            <td className="td-actions" style={{ display: "flex", flexDirection: "column" }}>
            <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-info btn-link btn-icon"
      data-original-title="View Post"
    >
      <i className="fa fa-image" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-success btn-link btn-icon"
      data-original-title="Edit Post"
    >
      <i className="fa fa-edit" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-danger btn-link btn-icon"
      data-original-title="Remove Post"
    >
      <i className="fa fa-times" />
    </button>
  </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="img-container">
                <img src="../../assets/img/blog-1.jpg" alt="..." />
              </div>
            </td>
            <td className="td-name">To use or not to use Bootstrap</td>
            <td>
              The Office Chair adapts naturally to virtually every body and is a
              permanent fixture.
            </td>
            <td className="td-number">10/05/2016</td>
            <td className="td-number">13,763</td>
            <td className="td-actions" style={{ display: "flex", flexDirection: "column" }}>
            <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-info btn-link btn-icon"
      data-original-title="View Post"
    >
      <i className="fa fa-image" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-success btn-link btn-icon"
      data-original-title="Edit Post"
    >
      <i className="fa fa-edit" />
    </button>
  </div>
  <div>
    <button
      type="button"
      rel="tooltip"
      data-placement="left"
      title=""
      className="btn btn-danger btn-link btn-icon"
      data-original-title="Remove Post"
    >
      <i className="fa fa-times" />
    </button>
  </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  )
}

export default AddTask
