import React, { useState } from "react";
import { Modal, Button, Checkbox, FormControlLabel } from "@mui/material";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yellow } from "@mui/material/colors";

library.add(fas);

const IconToOpenFilterbyModal = ({ setModalVisible }) => {
    return (
        <div onClick={() => setModalVisible(true)}>
            <FontAwesomeIcon
                icon={["fas", "arrow-down-wide-short"]}
                size="2x"
                color="black"
                style={{ cursor: "pointer" }}
            />
        </div>
    );
};

const FilterbyModal = ({ handleSortFilter }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ["อาหาร", "บันเทิง", "สุขภาพ", "การเรียน", "แฟชัน", "ท่องเที่ยว", "ความสัมพันธ์", "ครอบครัว", "หนังสือ", "ภาษา/ศาสนา/ความเชื่อ", "เทคโนโลยี", "อื่นๆ"];

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleConfirm = () => {
        handleSortFilter(selectedOptions);
        setModalVisible(false);
    };

    const handleChange = (option) => {
        const currentIndex = selectedOptions.indexOf(option);
        const newSelectedOptions = [...selectedOptions];

        if (currentIndex === -1) {
            newSelectedOptions.push(option);
        } else {
            newSelectedOptions.splice(currentIndex, 1);
        }

        setSelectedOptions(newSelectedOptions);
    };

    return (
        <>
            <div>
                {/* Icon to open the modal */}
                <IconToOpenFilterbyModal setModalVisible={setModalVisible} />
            </div>
            {modalVisible && (
                <Modal open={modalVisible} onClose={handleClose}>
                    <div style={styles.modalView}>
                        <div style={styles.modalTop}>
                            <h2 style={styles.modalText}>Filter by</h2>
                            <Button onClick={handleClose}>
                                <FontAwesomeIcon
                                    icon={["fas", "xmark"]}
                                    color="white"
                                    size="3x"
                                    style={{ cursor: "pointer" }}
                                />
                            </Button>
                        </div>

                        <div style={styles.checkboxContainer}>
                            {options.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes(option)}
                                            onChange={() => handleChange(option)}
                                            value={option}
                                            sx={{
                                                color: "white",
                                                "&.Mui-checked": { color: yellow[600] },
                                                cursor: "pointer"
                                            }}
                                        />
                                    }
                                    label={<span style={{ color: "white" }}>{option}</span>}
                                />
                            ))}
                        </div>
                        <Button
                            variant="contained"
                            style={styles.confirmButton}
                            onClick={handleConfirm}
                        >
                            SAVE
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
    checkboxContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "20px",
    },
    confirmButton: {
        display: "block",
        width: "100%",
        padding: "10px",
        marginTop: "20px",
        borderRadius: "50px",
        backgroundColor: "#FDC319",
        color: "#4542C1",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

export { FilterbyModal, IconToOpenFilterbyModal };
