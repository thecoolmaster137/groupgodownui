import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center pt-4 pb-4">
      <div className="col-4 p-4 border border-5 rounded">
        <h4 className="text-center pb-1">Admin Login</h4>
        <form>
          <div class="form-outline mb-3">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-3">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-primary" style={signinBtn}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const signinBtn = {
  width: "-webkit-fill-available",
};

export default Login;
