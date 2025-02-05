import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import phamacoreLogo from "../../assets/images/phamacore.png";
import Sidebar from "../Sidebar/Sidebar";

const MasterDoc = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">
        <Sidebar currentStep={1} />

        <div className="form-content">
          {/* Header */}
          <div className="d-flex flex-column align-items-center mb-4">
            <img src={phamacoreLogo} alt="logo" className="w-20 h-20" />
            <h1 className="display-6 fw-bold" style={{ color: "#c58c4f" }}>
              phAMACore<sup>™</sup>Cloud
            </h1>
          </div>
          <div className="form-header">
            <h2>Upload Master Document (Optional)</h2>
            <p>Max file size: 5MB | Max 3 files</p>
          </div>

          <Form>
            <Form.Group controlId="masterFile">
              <div className="upload-box">
                <p>Click or Drag files here to upload</p>
                <Form.Control type="file" multiple hidden />
              </div>
            </Form.Group>

            <div className="d-flex justify-content-between mt-3">
              <Button
                className="previous-btn"
                variant="secondary"
                onClick={() => navigate("/")}
              >
                Previous
              </Button>

              <Button
                className="next-btn"
                onClick={() => navigate("/acct-activation")}
              >
                Next Step
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MasterDoc;
