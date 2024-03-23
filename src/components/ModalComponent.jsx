import React, { useState } from "react";
import {
  Modal,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yellow } from "@mui/material/colors";

library.add(fas);

const IconToOpenModal = ({ setModalVisible }) => {
  return (
    <div onClick={() => setModalVisible(true)}>
      <FontAwesomeIcon
        icon={["fas", "arrow-down-wide-short"]}
        size="4x"
        color="black"
        style={{cursor: "pointer"}}
      />
    </div>
  );
};

const ModalComponent = ({ handleSortFilter }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleClose = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    handleSortFilter(selectedOption);
    setModalVisible(false);
  };

  return (
    <>
      <div>
        {/* Icon to open the modal */}
        <IconToOpenModal setModalVisible={setModalVisible} />
      </div>
      {modalVisible && (
        <Modal open={modalVisible} onClose={handleClose}>
          <div style={styles.modalView}>
            <div style={styles.modalTop}>
              <h2 style={styles.modalText}>Sort by</h2>
              <Button onClick={handleClose}>
                <FontAwesomeIcon
                  icon={["fas", "xmark"]}
                  color="white"
                  size="3x"
                  style={{cursor: "pointer"}}
                />
              </Button>
            </div>

            <div style={styles.radioButtonContainer}>
              <RadioGroup
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
              >
                <div style={styles.radioButton}>
                  <FormControlLabel
                    value="popular"
                    control={
                      <Radio
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                          cursor: "pointer"
                        }}
                      />
                    }
                    label="ยอดนิยม"
                  />
                </div>
                <div style={styles.radioButton}>
                  <FormControlLabel
                    value="newest"
                    control={
                      <Radio
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                          cursor: "pointer"
                        }}
                      />
                    }
                    label="ใหม่ล่าสุด"
                  />
                </div>
                <div style={styles.radioButton}>
                  <FormControlLabel
                    value="oldest"
                    control={
                      <Radio
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                          cursor: "pointer"
                        }}
                      />
                    }
                    label="เก่าที่สุด"
                  />
                </div>
              </RadioGroup>
            </div>

            <Button
              variant="contained"
              style={styles.confirmButton}
              onClick={handleConfirm}
            >
              Okay
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

const styles = {
  modalView: {
    position: "absolute",
    width: "400px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#4542C1",
    borderRadius: "20px",
    padding: "35px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  modalTop: {
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalText: {
    fontWeight: "bold",
    fontSize: "4vh",
    alignItems: "center",
    color: "#fff",
    margin: 0,
  },
  radioButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  radioButton: {
    display: "flex",
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  confirmButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "50px",
    backgroundColor: "#FDC319",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export { ModalComponent, IconToOpenModal };
