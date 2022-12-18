// GET all
function getBootcamps() {
  const bootcamps = [
    { id: 1, name: "js", prise: 65 },
    { id: 2, name: "C++", prise: 105 },
  ];
  return bootcamps;
}

// GET one
function getSingleBootcamp() {}

// POST one
function createSingleBootcamp() {}

// UPDATE one
function updateSingleBootcamp() {}

// DELETE one
function deleteSingleBootcamp() {}

module.exports = {
  getBootcamps,
  getSingleBootcamp,
  createSingleBootcamp,
  updateSingleBootcamp,
  deleteSingleBootcamp,
};
