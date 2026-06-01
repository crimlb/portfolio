// ModaleCertificazioni.jsx
import { Modal } from "react-bootstrap";
import { X } from "lucide-react";

function ModaleCertificazioni({ selected, setSelected }) {
  return (
    <Modal
      show={!!selected}
      onHide={() => setSelected(null)}
      centered
      size="lg"
      contentClassName="bg-transparent border-0 shadow-none">
      <div className="position-relative d-flex justify-content-center w-100">
  <div className="position-relative d-inline-block">

        <button
          onClick={() => setSelected(null)}
          className="rounded-circle close">
          <X size={18} />
        </button>

        {selected?.certificato && (
          <img
            src={selected.certificato}
            alt={selected.titolo}
            className=" img-fluid rounded-4 shadow-lg object-fit-contain certificato-preview"/>
        )}

      </div>
      </div>
    </Modal>
  );
}

export default ModaleCertificazioni;