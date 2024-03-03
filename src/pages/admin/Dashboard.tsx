

const Dashboard = () => {
  return (
      <>
          <div className="page-wrapper">
            <div className="page-content">

                            <div className="card radius-10">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-group g-0">
                                <div className="col">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h5 className="mb-0">9526</h5>
                                            <div className="ms-auto">
                                                <i className='bx bx-cart fs-3 text-white'></i>
                                            </div>
                                        </div>
                                        <div className="progress my-3" style={{height:"4px;"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <div className="d-flex align-items-center text-white">
                                            <p className="mb-0">Total Orders</p>
                                            <p className="mb-0 ms-auto">+4.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h5 className="mb-0">$8323</h5>
                                            <div className="ms-auto">
                                                <i className='bx bx-dollar fs-3 text-white'></i>
                                            </div>
                                        </div>
                                        <div className="progress my-3" style={{height:"4px;"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <div className="d-flex align-items-center text-white">
                                            <p className="mb-0">Total Revenue</p>
                                            <p className="mb-0 ms-auto">+1.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h5 className="mb-0">6200</h5>
                                            <div className="ms-auto">
                                                <i className='bx bx-group fs-3 text-white'></i>
                                            </div>
                                        </div>
                                        <div className="progress my-3" style={{height:"4px;"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <div className="d-flex align-items-center text-white">
                                            <p className="mb-0">Visitors</p>
                                            <p className="mb-0 ms-auto">+5.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h5 className="mb-0">5630</h5>
                                            <div className="ms-auto">
                                                <i className='bx bx-envelope fs-3 text-white'></i>
                                            </div>
                                        </div>
                                        <div className="progress my-3" style={{height:"4px;"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <div className="d-flex align-items-center text-white">
                                            <p className="mb-0">Messages</p>
                                            <p className="mb-0 ms-auto">+2.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 col-lg-8 col-xl-8 d-flex">
                            <div className="card radius-10 w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5 className="mb-0">Site Traffic</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                            <i className='bx bx-dots-horizontal-rounded'></i>
                                            </div>
                                            <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
                                        <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1 text-white"></i>New Visitor</span>
                                        <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1 text-light-1"></i>Old Visitor</span>
                                    </div>
                                <div className="chart-container-1">
                                    <canvas id="chart1"></canvas>
                                </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
                                <div className="col">
                                    <div className="p-3">
                                    <h5 className="mb-0">45.87M</h5>
                                    <small className="mb-0">Overall Visitor <span> <i className="bx bx-up-arrow-alt align-middle"></i> 2.43%</span></small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3">
                                    <h5 className="mb-0">15:48</h5>
                                    <small className="mb-0">Visitor Duration <span> <i className="bx bx-up-arrow-alt align-middle"></i> 12.65%</span></small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3">
                                    <h5 className="mb-0">245.65</h5>
                                    <small className="mb-0">Pages/Visit <span> <i className="bx bx-up-arrow-alt align-middle"></i> 5.62%</span></small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    
                            <div className="col-12 col-lg-4 col-xl-4 d-flex">
                            
                            <div className="card radius-10 overflow-hidden w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-2">
                                        <div>
                                            <h5 className="mb-0">Weekly sales</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                            <i className='bx bx-dots-horizontal-rounded'></i>
                                            </div>
                                            <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="chart-js-container2">
                                    <div className="piechart-legend">
                                    <h3 className="mb-1">95K</h3>
                                    <h6 className="mb-0">Total sales</h6>
                                    </div>
                                    <canvas id="chart2"></canvas>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center mb-0">
                                    <tbody>
                                        <tr className="border-top">
                                        <td><i className="bx bxs-circle text-white me-2"></i> Direct</td>
                                        <td>$5856</td>
                                        <td>+55%</td>
                                        </tr>
                                        <tr>
                                        <td><i className="bx bxs-circle text-light-2 me-2"></i>Affiliate</td>
                                        <td>$2602</td>
                                        <td>+25%</td>
                                        </tr>
                                        <tr>
                                        <td><i className="bx bxs-circle text-light-3 me-2"></i>E-mail</td>
                                        <td>$1802</td>
                                        <td>+15%</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="row row-cols-1 row-cols-lg-3">
                            <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="w_chart easy-dash-chart1" data-percent="60">
                                    <span className="w_percent"></span>
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0">Facebook Followers</h6>
                                    <small className="mb-0">22.14% <i className='bx bxs-up-arrow align-middle me-1'></i>Since Last Week</small>
                                    </div>
                                    <div className="ms-auto fs-1 text-white"><i className='bx bxl-facebook'></i></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="w_chart easy-dash-chart2" data-percent="65">
                                    <span className="w_percent"></span>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Twitter Tweets</h6>
                                        <small className="mb-0">32.15% <i className='bx bxs-up-arrow align-middle me-1'></i>Since Last Week</small>
                                    </div>
                                    <div className="ms-auto fs-1 text-white"><i className='bx bxl-twitter'></i></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="w_chart easy-dash-chart3" data-percent="75">
                                    <span className="w_percent"></span>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Youtube Subscribers</h6>
                                        <small className="mb-0">58.24% <i className='bx bxs-up-arrow align-middle me-1'></i>Since Last Week</small>
                                    </div>
                                    <div className="ms-auto fs-1 text-white"><i className='bx bxl-youtube'></i></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>


                            <div className="row">
                                <div className="col-12 col-lg-12 col-xl-6">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <h5 className="mb-0">Selling Region</h5>
                                            </div>
                                            <div className="dropdown options ms-auto">
                                                <div className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    <div id="dashboard-map" style={{height: "335px;"}}></div>
                                    </div>
                                    <div className="table-responsive">
                                    <table className="table table-hover align-items-center mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Country</th>
                                                <th>Income</th>
                                                <th>Trend</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-ca me-2"></i> USA</td>
                                                <td>$4,586</td>
                                                <td><span id="trendchart1"></span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-us me-2"></i>Canada</td>
                                                <td>$2,089</td>
                                                <td><span id="trendchart2"></span></td>
                                            </tr>
                        
                                            <tr>
                                                <td><i className="flag-icon flag-icon-in me-2"></i>India</td>
                                                <td>$3,039</td>
                                                <td><span id="trendchart3"></span></td>
                                            </tr>
                        
                                            <tr>
                                                <td><i className="flag-icon flag-icon-gb me-2"></i>UK</td>
                                                <td>$2,309</td>
                                                <td><span id="trendchart4"></span></td>
                                            </tr>
                        
                                            <tr>
                                                <td><i className="flag-icon flag-icon-de me-2"></i>Germany</td>
                                                <td>$7,209</td>
                                                <td><span id="trendchart5"></span></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="col-12 col-lg-12 col-xl-6">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                    <div className="card radius-10 overflow-hidden">
                                        <div className="card-body">
                                        <p className="mb-2">Page Views</p>
                                        <h4 className="mb-0">8,293 <small className="font-13 text-white">5.2% <i className="bx bx-up-arrow-alt"></i></small></h4>
                                        </div>
                                        <div className="chart-container-2">
                                        <canvas id="chart3"></canvas>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                    <div className="card radius-10 overflow-hidden">
                                        <div className="card-body">
                                        <p className="mb-2">Total Clicks</p>
                                        <h4 className="mb-0">7,493 <small className="font-13 text-white">1.4% <i className="bx bx-up-arrow-alt"></i></small></h4>
                                        
                                        </div>
                                        <div className="chart-container-2">
                                            <canvas id="chart4"></canvas>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                    <div className="card radius-10">
                                        <div className="card-body text-center">
                                        <p className="mb-4">Total Downloads</p>
                                        <input className="knob" data-width="190" data-height="190" data-readOnly="true" data-thickness=".15" data-angleoffset="90" data-linecap="round" data-bgcolor="rgba(0, 0, 0, 0.08)" data-fgcolor="#fff" data-max="15000" value="8550"/>
                                        <hr/>
                                        <p className="mb-0 small-font text-center">3.4% <i className="zmdi zmdi-long-arrow-up"></i> since yesterday</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                    <div className="card radius-10">
                                        <div className="card-body">
                                        <p>Device Storage</p>
                                        <h4 className="mb-3">42620/50000</h4>
                                        <hr/>
                                        <div className="progress-wrapper mb-4">
                                            <p>Documents <span className="float-end">12GB</span></p>
                                            <div className="progress" style={{height:"5px;"}}>
                                                <div className="progress-bar bg-white" style={{width:"80%"}}></div>
                                            </div>
                                        </div>
                                        
                                        <div className="progress-wrapper mb-4">
                                            <p>Images <span className="float-end">10GB</span></p>
                                            <div className="progress" style={{height:"5px;"}}>
                                                <div className="progress-bar bg-white" style={{width:"60%"}}></div>
                                            </div>
                                        </div>
                                        
                                        <div className="progress-wrapper mb-4">
                                            <p>Mails <span className="float-end">5GB</span></p>
                                            <div className="progress" style={{height:"5px;"}}>
                                                <div className="progress-bar bg-white" style={{width:"40%"}}></div>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                                <div className="card radius-10 overflow-hidden w-100">
                                    <div className="card-body">
                                    <p>Total Earning</p>
                                    <h4 className="mb-0">$287,493</h4>
                                    <small>1.4% <i className='bx bx-up-arrow-alt'></i> Since Last Month</small>
                                    <hr/>
                                    <p>Total Sales</p>
                                    <h4 className="mb-0">$87,493</h4>
                                    <small>5.43% <i className='bx bx-up-arrow-alt'></i> Since Last Month</small>
                                    <div className="mt-5">
                                    <div className="chart-container-4">
                                        <canvas id="chart5"></canvas>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        
                                <div className="col-12 col-lg-6 col-xl-8 d-flex">
                                <div className="card radius-10 w-100">
                                    <div className="card-header border-bottom bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h5 className="mb-0">Customer Review</h5>
                                            </div>
                                            <div className="dropdown options ms-auto">
                                                <div className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                                <i className='bx bx-dots-horizontal-rounded'></i>
                                                </div>
                                                <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                                                <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                                                <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush review-list">
                                        <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-1.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                        <div className="ms-3">
                                            <h6 className="mb-0">iPhone X <small className="ms-4">08.34 AM</small></h6>
                                            <p className="mb-0 small-font">Sara Jhon : This is svery Nice phone in low budget.</p>
                                        </div>
                                        <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                        </div>
                                        </div>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-2.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Air Pod <small className="ml-4">05.26 PM</small></h6>
                                            <p className="mb-0 small-font">Danish Josh : The brand apple is original !</p>
                                        </div>
                                        <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                        </div>
                                        </div>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-3.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Mackbook Pro <small className="ml-4">06.45 AM</small></h6>
                                            <p className="mb-0 small-font">Jhon Doe : Excllent product and awsome quality</p>
                                        </div>
                                        <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                        </div>
                                        </div>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-4.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Air Pod <small className="ml-4">08.34 AM</small></h6>
                                            <p className="mb-0 small-font">Christine : The brand apple is original !</p>
                                        </div>
                                        <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                        </div>
                                        </div>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-9.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                            <div className="ms-3">
                                            <h6 className="mb-0">Air Pod <small className="ml-4">05.26 PM</small></h6>
                                            <p className="mb-0 small-font">Danish Josh : The brand apple is original !</p>
                                            </div>
                                            <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            </div>
                                        </div>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-7.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Mackbook <small className="ml-4">08.34 AM</small></h6>
                                            <p className="mb-0 small-font">Michle : The brand apple is original !</p>
                                        </div>
                                        <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                        </div>
                                        </div>
                                        </li>
                                        <li className="list-group-item bg-transparent">
                                            <div className="d-flex align-items-center">
                                            <img src="./public/images/avatars/avatar-8.png" alt="user avatar" className="rounded-circle" width="55" height="55"/>
                                            <div className="ms-3">
                                            <h6 className="mb-0">Air Pod <small className="ml-4">05.26 PM</small></h6>
                                            <p className="mb-0 small-font">Danish Josh : The brand apple is original !</p>
                                            </div>
                                            <div className="ms-auto star">
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            <i className='bx bxs-star text-white'></i>
                                            </div>
                                        </div>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>


                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5 className="mb-0">Orders Summary</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                            <i className='bx bx-dots-horizontal-rounded'></i>
                                            </div>
                                            <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                                            <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Order id</th>
                                                    <th>Product</th>
                                                    <th>Customer</th>
                                                    <th>Date</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#897656</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/chair.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">Light Blue Chair</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Brooklyn Zeo</td>
                                                    <td>12 Jul 2020</td>
                                                    <td>$64.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">In Progress</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987549</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/shoes.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">Green Sport Shoes</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Martin Hughes</td>
                                                    <td>14 Jul 2020</td>
                                                    <td>$45.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">Completed</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#685749</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/headphones.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">Red Headphone 07</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Shoan Stephen</td>
                                                    <td>15 Jul 2020</td>
                                                    <td>$67.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">Cancelled</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#887459</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/idea.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">Mini Laptop Device</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Alister Campel</td>
                                                    <td>18 Jul 2020</td>
                                                    <td>$87.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">Completed</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#335428</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/user-interface.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">Purple Mobile Phone</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Keate Medona</td>
                                                    <td>20 Jul 2020</td>
                                                    <td>$75.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">In Progress</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#224578</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/watch.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">Smart Hand Watch</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Winslet Maya</td>
                                                    <td>22 Jul 2020</td>
                                                    <td>$80.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">Cancelled</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#447896</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="recent-product-img">
                                                                <img src="./public/images/icons/tshirt.png" alt=""/>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-1 font-14">T-Shirt Blue</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Emy Jackson</td>
                                                    <td>28 Jul 2020</td>
                                                    <td>$96.00</td>
                                                    <td>
                                                        <div className="badge rounded-pill bg-light text-white w-100">Completed</div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex order-actions">	<a href="javascript:;" className=""><i className="bx bx-cog"></i></a>
                                                            <a href="javascript:;" className="ms-4"><i className="bx bx-down-arrow-alt"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </div>
              
          </div>
    </>
  )
}

export default Dashboard
