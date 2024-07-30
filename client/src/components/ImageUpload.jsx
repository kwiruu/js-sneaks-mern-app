import Image from '../components/Image';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function ImageUpload({ addedPhoto, onChange }) {
  function uploadPhoto(event) {
    const files = event.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }
    axios
      .post('/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => [...prev, ...filenames]);
      });
  }

  function removePhoto(ev, filename) {
    ev.preventDefault();
    onChange([...addedPhoto.filter((item) => item !== filename)]);
  }

  function selectMainPhoto(ev, filename) {
    ev.preventDefault();
    const addedPhotoCopy = addedPhoto.filter(photo => photo !== filename);
    const newAddedPhotos = [filename, ...addedPhotoCopy];
    onChange(newAddedPhotos);
  }

  return (
    <div className="col-span-full">
      <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
        Shoe photo
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                multiple
                onChange={uploadPhoto}
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      <div
        className="mt-5"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '55px',
        }}
      >
        {addedPhoto.length > 0 &&
          addedPhoto.map((link) => (
            <div
              key={link}
              style={{
                width: '150px', // Fixed width
                height: '150px', // Fixed height to make it square
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {/* Delete button in the top-right corner */}
              <button
                onClick={ev => removePhoto(ev, link)}
                className="absolute p-1"
                style={{
                  top: '0',
                  right: '0',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Star button in the top-left corner */}
              <button
                onClick={ev => selectMainPhoto(ev, link)}
                className="absolute p-1"
                style={{
                  top: '0',
                  left: '0',
                }}
              >
                {link === addedPhoto[0] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {link !== addedPhoto[0] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                )}
              </button>

              <Image
                src={link}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  addedPhoto: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
