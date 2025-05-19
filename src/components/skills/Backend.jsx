// import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">

        {/* kolom 1 */}
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

        </div>

        {/* kolom 2 */}
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Mysql</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">API</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Sql</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Backend