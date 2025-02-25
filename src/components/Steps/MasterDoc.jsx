import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileUpload from "../Upload/FileUpload";
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
          </div>

          <Form>
            <div className="upload-box">
              <p>
                Max file size: <strong>5MB</strong> | Max: 3 files
              </p>
              <FileUpload
                onFileUpload={(files) => console.log("Uploaded files:", files)}
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <Button
                className="previous-btn"
                variant="secondary"
                onClick={() => navigate("/")}
              >
                <span className="btn-text">Previous</span>
                <BsArrowLeft className="btn-icon" />
              </Button>

              <Button
                className="next-btn"
                onClick={() => navigate("/acct-activation")}
              >
                <span className="btn-text">Next</span>
                <BsArrowRight className="btn-icon" />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MasterDoc;
