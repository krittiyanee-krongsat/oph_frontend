
//*Email Right here//
let isValidate = true;

const setEmail = () => {
  validate(); // Call validate before proceeding

  if (isValidate) {
    localStorage.setItem('email', document.getElementById('txtEmail').value);
    location.replace("2_Age.html");
  } else {
    localStorage.setItem('email', '');
  }
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $('#result');
  const email = $('#txtEmail').val();
  $result.text('');

  if (validateEmail(email)) {
    $result.text(email + ' is valid.');
    $result.css('color', 'green');
    isValidate = true;
  } else {
    $result.text(email + ' is invalid.');
    $result.css('color', 'red');
    isValidate = false;
  }

  return isValidate;
};

$('#txtEmail').on('input', validate);

//*Age*//
const setAge = () => {
    localStorage.setItem('age', document.querySelector('input[name="value-radio"]:checked').value); //เปลี่ยนค่า value เป็น id
    location.replace("3_Gender.html");
    
}

const goBack = () => {
  location.replace("1_Home.html");
};

//*Gender*//
const setGender = () => {
  localStorage.setItem('gender', document.querySelector('input[name="value-gender"]:checked').value);
  location.replace("4_Status.html");
}

const goBackGender = () => {
  location.replace("../infoPage/2_Age.html");
};

//*Status*//
const setStatus = () => {
  var choice1 = document.getElementById("Student").checked;
  var choice2 = document.getElementById("Undergraduete").checked;
  
  if (choice1) {
    localStorage.setItem('status', document.querySelector('input[name="value-status"]:checked').value);
    location.replace("5_Degree.html");
  } else if (choice2) {
    localStorage.setItem('status', document.querySelector('input[name="value-status"]:checked').value);
    location.replace("4_1_Faculty.html");
  } else {
    localStorage.setItem('status', document.querySelector('input[name="value-status"]:checked').value);
    location.replace("../VisitorPage/1_VDeepsea.html");
  }
}

const goBackStatus = () => {
  location.replace("3_Gender.html");
};

//*Degree*//
const setDegree = () => {
  var choice3 = document.getElementById("Voc").checked
  if (choice3) {
  localStorage.setItem('degree', document.querySelector('input[name="value-degree"]:checked').value);
  location.replace("5_1_FosVoc.html");
  } else {
  localStorage.setItem('degree', document.querySelector('input[name="value-degree"]:checked').value);
  location.replace("6_Fos.html");
  }
}

const goBackDegree = () => {
  location.replace("4_Status.html");
};

//*Field Of Study*//
const setFos = () => {
  localStorage.setItem('fos', document.getElementById('txtFos').value);
  location.replace("7_Province.html");
}

const goBackFos = () => {
  location.replace("5_Degree.html");
};


//*Province*//
const setProvince = () => {
    location.replace("../StudentPage/1_SDeepsea.html");
}

const goBackProvince = () => {
location.replace("6_Fos.html");
};

//*Faculty*//
const setFaculty = () => {
  localStorage.setItem('faculty', document.getElementById('txtFaculty').value);
    location.replace("../StudentPage/1_SDeepsea.html");
}

const goBackFaculty = () => {
location.replace("../infoPage/4_Status.html");
};

//*Fosvoc*//
const setFosvoc = () => {
  localStorage.setItem('fosvoc', document.getElementById('txtFosvoc').value);
    location.replace("../StudentPage/1_SDeepsea.html");
}

const goBackFosvoc = () => {
location.replace("../infoPage/5_Degree.html");
};

//-------------------------------InfoPage--------------------------//

const DeepSeaNext = async () => {
location.replace("../VisitorPage/2_Page1.html")

  // try {
  //   const response = await fetch('http://localhost:5000/register_user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });

  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   const myJson = await response.json(); // extract JSON from the http response

  //   // do something with myJson
  //   console.log(myJson);
  // } catch (error) {
  //   console.error('There was a problem with the fetch operation:', error);
  // }
};


document.addEventListener('DOMContentLoaded', (event) => {
  const checkboxes = document.querySelectorAll('#page1Options input[type="checkbox"]');
  
  // Load saved selections from local storage
  const savedSelections = JSON.parse(localStorage.getItem('selectedOptions')) || [];
  savedSelections.forEach(option => {
      const checkbox = document.querySelector(`input[value="${option}"]`);
      if (checkbox) {
          checkbox.checked = true;
      }
  });

  // Limit the number of selected options to 3
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
          const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
          if (checkedCheckboxes.length > 3) {
              event.target.checked = false;
              alert('You can only select up to 3 options.');
          }
      });
  });
});

function saveSelections() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectedOptions = [];
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedOptions.push(checkbox.value);
      }
  });
  localStorage.setItem('selectedOptions_page1', JSON.stringify(selectedOptions));
  location.replace('../VisitorPage/3_Page2.html')
}

const goBackPageDSP1 = () => {
  location.replace("../VisitorPage/1_VDeepsea.html");
  };

// Page2

document.addEventListener('DOMContentLoaded', (event) => {
  const checkboxes2 = document.querySelectorAll('#page2Options input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedSelection2 = localStorage.getItem('selectedOption_page2');
  if (savedSelection2) {
      const checkbox2 = document.querySelector(`#page2Options input[value="${savedSelection2}"]`);
      if (checkbox2) {
          checkbox2.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkboxes2.forEach(checkbox2 => {
      checkbox2.addEventListener('change', (event) => {
          if (event.target.checked) {
              checkboxes2.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function saveSelectionPage2() {
  var selectedIds = [];
  $('#checkbox-containerV2 input[type=checkbox]:checked').each(function() {
      selectedIds.push($(this).val()); // Collect selected checkbox values
  });

  // Ensure exactly one option is selected
  if (selectedIds.length === 1) {
      localStorage.setItem('selectedOptions_page2', JSON.stringify(selectedIds));
      console.log('Selections saved for PageV 2:', selectedIds);
      location.replace('../VisitorPage/4_Page3.html')
  } else {
      alert('Please select exactly 1 option.');
  }
}


  const goBackPageDSP2 = () => {
    location.replace("../VisitorPage/2_Page1.html");
  };

  // Page3

  document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes3 = document.querySelectorAll('#page3Options input[type="checkbox"]');
    
    // Load saved selection from local storage
    const savedSelection3 = localStorage.getItem('selectedOption_page3');
    if (savedSelection3) {
        const checkbox3 = document.querySelector(`#page3Options input[value="${savedSelection3}"]`);
        if (checkbox3) {
            checkbox3.checked = true;
        }
    }
  
    // Ensure only one option is selected at a time
    checkboxes3.forEach(checkbox3 => {
        checkbox3.addEventListener('change', (event) => {
            if (event.target.checked) {
                checkboxes3.forEach(cb => {
                    if (cb !== event.target) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
  });
  
  function saveSelectionPage3() {
    var selectedIds = [];
    $('#checkbox-containerV3 input[type=checkbox]:checked').each(function() {
        selectedIds.push($(this).val()); // Collect selected checkbox values
    });
  
    // Ensure exactly one option is selected
    if (selectedIds.length === 1) {
        localStorage.setItem('selectedOptions_page3', JSON.stringify(selectedIds));
        console.log('Selections saved for PageV 3:', selectedIds);
        location.replace('../VisitorPage/5_Page4.html')
    } else {
        alert('Please select exactly 1 option.');
    }
  }

  const goBackPageDSP3 = () => {
    location.replace("../VisitorPage/3_Page2.html");
  };

    // Page4

    document.addEventListener('DOMContentLoaded', (event) => {
      const checkboxes4 = document.querySelectorAll('#page4Options input[type="checkbox"]');
      
      // Load saved selection from local storage
      const savedSelection4 = localStorage.getItem('selectedOption_page4');
      if (savedSelection4) {
          const checkbox4 = document.querySelector(`#page4Options input[value="${savedSelection4}"]`);
          if (checkbox4) {
              checkbox4.checked = true;
          }
      }
    
      // Ensure only one option is selected at a time
      checkboxes4.forEach(checkbox4 => {
          checkbox4.addEventListener('change', (event) => {
              if (event.target.checked) {
                  checkboxes4.forEach(cb => {
                      if (cb !== event.target) {
                          cb.checked = false;
                      }
                  });
              }
          });
      });
    });
    
    function saveSelectionPage4() {
      var selectedIds = [];
      $('#checkbox-containerV4 input[type=checkbox]:checked').each(function() {
          selectedIds.push($(this).val()); // Collect selected checkbox values
      });
    
      // Ensure exactly one option is selected
      if (selectedIds.length === 1) {
          localStorage.setItem('selectedOptions_page4', JSON.stringify(selectedIds));
          console.log('Selections saved for PageV 4:', selectedIds);
          location.replace('../VisitorPage/6_Page5.html')
      } else {
          alert('Please select exactly 1 option.');
      }
    }

    const goBackPageDSP4 = () => {
      location.replace("../VisitorPage/4_Page3.html");
      };


  
    document.addEventListener('DOMContentLoaded', (event) => {
      const checkboxes5 = document.querySelectorAll('#page5Options input[type="checkbox"]');
      
      // Load saved selections from local storage
      const savedSelections5 = JSON.parse(localStorage.getItem('selectedOptions5')) || [];
      savedSelections5.forEach(option => {
          const checkbox5 = document.querySelector(`input[value="${option}"]`);
          if (checkbox5) {
              checkbox5.checked = true;
          }
      });
    
      // Limit the number of selected options to 3
      checkboxes5.forEach(checkbox5 => {
          checkbox5.addEventListener('change', (event) => {
              const checkedCheckboxes5 = document.querySelectorAll('input[type="checkbox"]:checked');
              if (checkedCheckboxes5.length > 3) {
                  event.target.checked = false;
                  alert('You can only select up to 3 options.');
              }
          });
      });
    });
    
    function saveSelectionPage5() {
      const checkboxes5 = document.querySelectorAll('input[type="checkbox"]');
      const selectedOptions5 = [];
      checkboxes5.forEach(checkbox5 => {
          if (checkbox5.checked) {
              selectedOptions5.push(checkbox5.value);
          }
      });
      localStorage.setItem('selectedOptions_page5', JSON.stringify(selectedOptions5));
      location.replace('../ReviewPage/1_ReviewHome.html')
    }
    
    const goBackPageDSP5 = () => {
      location.replace("../VisitorPage/5_Page4.html");
      };

/*Student Page*/

const DeepSeaNextStudent = async () => {
location.replace("../StudentPage/2_SPage1.html")
};
/*ReviewPage*/



const ModelPageNext = () => {
  var email_name = localStorage.getItem('email')
  var age_id = localStorage.getItem('age');
  var gender_id = localStorage.getItem('gender');
  var status_id = localStorage.getItem('status');
  var degree_id = localStorage.getItem('degree');
  var field_study_name1 = localStorage.getItem('fos');
  var field_study_name2 = localStorage.getItem('fosvoc')
  var province_id = localStorage.getItem('province');

  var field_study_name = field_study_name1 || field_study_name2;

  let data = {
    email_name: email_name,
    age_id: age_id,
    gender_id: gender_id,
    status_id: status_id,
    degree_id: degree_id,
    field_study_name: field_study_name,
    province_id: province_id,
    //result_id: 1  
  }
  
  $.ajax({
    url: 'https://deepseaoph2024.bu.ac.th/api/register_user',
    method: 'POST',
    dataType: 'json', //datatype ที่ส่งมาเป็นรูปแบบ json
    data: data
}).always(function (response) {
    console.log(response);
    alert('success');
})
$.ajax({
  url: 'https://deepseaoph2024.bu.ac.th/api/result_max/8',
  method: 'GET',
  dataType: 'json'
}).done(function (response) {
  console.log('GET response:', response);

  if (Array.isArray(response) && response.length > 0) {
    var program_id = response[0].program_id;
    console.log('Received program_id:', program_id);

  // Redirect based on program_id value
  switch (program_id) {
    case 1:
      location.replace("../ModelPage/2_1ModelPageAi.html");
      break;
    case 2:
      location.replace("../ModelPage/3_2ModelPageElec.html");
      break;
    case 3:
      location.replace("../ModelPage/4_3ModelPageCom.html");
      break;
    case 4:
      location.replace("../ModelPage/5_4ModelPageMulti.html");
      break;
    default:
      console.error('Unexpected program_id value:', program_id);
      alert('Invalid program_id. Redirecting to default page.');
      location.replace("../ModelPage/1_ModelPageStart.html");
  }
} else {
  console.error('program_id is not received or is invalid.');
  alert('program_id is missing. Redirecting to default page.');
  location.replace("../ModelPage/1_ModelPageStart.html");
}
}).fail(function (jqXHR, textStatus, errorThrown) {
console.error('GET request failed:', textStatus, errorThrown);
alert('Failed to retrieve program_id. Redirecting to default page.');
location.replace("../ModelPage/1_ModelPageStart.html");
});
}

document.addEventListener('DOMContentLoaded', (event) => {
  const checkreviews = document.querySelectorAll('#page1Review input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedReview = localStorage.getItem('OptionReview');
  if (savedReview) {
      const checkreview = document.querySelector(`#page1Review input[value="${savedReview}"]`);
      if (checkreview) {
        checkreview.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkreviews.forEach(checkreview => {
    checkreview.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkreviews.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function setReviewPage1() {
  const checkreview = document.querySelector('#page1Review input[type="checkbox"]:checked');
  if (checkreview) {
      localStorage.setItem('OptionReview', checkreview.value);
      location.replace("../ReviewPage/3_ReviewPage2.html")
  } else {
      alert('Please select an option.');
  }
}

const goBackReview = () => {
  location.replace("../ReviewPage/1_ReviewHome.html");
};

document.addEventListener('DOMContentLoaded', (event) => {
  const checkreviews2 = document.querySelectorAll('#page2Review input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedReview2 = localStorage.getItem('OptionReview_2');
  if (savedReview2) {
      const checkreview2 = document.querySelector(`#page2Review input[value="${savedReview2}"]`);
      if (checkreview2) {
        checkreview2.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkreviews2.forEach(checkreview2 => {
    checkreview2.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkreviews2.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function setReviewPage2() {
  const checkreview2 = document.querySelector('#page2Review input[type="checkbox"]:checked');
  if (checkreview2) {
      localStorage.setItem('OptionReview_2', checkreview2.value);
      location.replace("../ReviewPage/4_ReviewPage3.html")
  } else {
      alert('Please select an option.');
  }
}

const goBackReview2 = () => {
  location.replace("../ReviewPage/2_ReviewPage1.html");
};

document.addEventListener('DOMContentLoaded', (event) => {
  const checkreviews3 = document.querySelectorAll('#page3Review input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedReview3 = localStorage.getItem('OptionReview_3');
  if (savedReview3) {
      const checkreview3 = document.querySelector(`#page3Review input[value="${savedReview3}"]`);
      if (checkreview3) {
        checkreview3.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkreviews3.forEach(checkreview3 => {
    checkreview3.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkreviews3.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function setReviewPage3() {
  const checkreview3 = document.querySelector('#page3Review input[type="checkbox"]:checked');
  if (checkreview3) {
      localStorage.setItem('OptionReview_3', checkreview3.value);
      location.replace("../ReviewPage/5_ReviewPage4.html")
  } else {
      alert('Please select an option.');
  }
}

const goBackReview3 = () => {
  window.history.back();
  location.replace("../ReviewPage/3_ReviewPage2.html");
};

document.addEventListener('DOMContentLoaded', (event) => {
  const checkreviews4 = document.querySelectorAll('#page4Review input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedReview4 = localStorage.getItem('OptionReview_4');
  if (savedReview4) {
      const checkreview4 = document.querySelector(`#page4Review input[value="${savedReview4}"]`);
      if (checkreview4) {
        checkreview4.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkreviews4.forEach(checkreview4 => {
    checkreview4.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkreviews4.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function setReviewPage4() {
  const checkreview4 = document.querySelector('#page4Review input[type="checkbox"]:checked');
  if (checkreview4) {
      localStorage.setItem('OptionReview_4', checkreview4.value);
      location.replace("../ReviewPage/6_ReviewPage5.html")
  } else {
      alert('Please select an option.');
  }
}

const goBackReview4 = () => {
  window.history.back();
  location.replace("../ReviewPage/4_ReviewPage3.html");
};

document.addEventListener('DOMContentLoaded', (event) => {
  const checkreviews5 = document.querySelectorAll('#page5Review input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedReview5 = localStorage.getItem('OptionReview_5');
  if (savedReview5) {
      const checkreview5 = document.querySelector(`#page5Review input[value="${savedReview5}"]`);
      if (checkreview5) {
        checkreview5.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkreviews5.forEach(checkreview5 => {
    checkreview5.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkreviews5.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function setReviewPage5() {
  const checkreview5 = document.querySelector('#page5Review input[type="checkbox"]:checked');
  if (checkreview5) {
      localStorage.setItem('OptionReview_5', checkreview5.value);
      location.replace("../ReviewPage/7_ReviewPage6.html")
  } else {
      alert('Please select an option.');
  }
}

const goBackReview5 = () => {
  window.history.back();
  location.replace("../ReviewPage/5_ReviewPage4.html");
};

document.addEventListener('DOMContentLoaded', (event) => {
  const checkreviews6 = document.querySelectorAll('#page6Review input[type="checkbox"]');
  
  // Load saved selection from local storage
  const savedReview6 = localStorage.getItem('OptionReview_6');
  if (savedReview6) {
      const checkreview6 = document.querySelector(`#page6Review input[value="${savedReview6}"]`);
      if (checkreview6) {
        checkreview6.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkreviews6.forEach(checkreview6 => {
    checkreview6.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkreviews6.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});

function setReviewPage6() {
  const checkreview6 = document.querySelector('#page6Review input[type="checkbox"]:checked');
  if (checkreview6) {
      localStorage.setItem('OptionReview_6', checkreview6.value);
      location.replace("../ReviewPage/8_ReviewPage7.html")
  } else {
      alert('Please select an option.');
  }
}

const goBackReview6 = () => {
  window.history.back();
  location.replace("../ReviewPage/6_ReviewPage5.html");
};

const setReviewPage7 = () => {
  localStorage.setItem('suggest', document.getElementById('txtSuggest').value);
  location.replace("");
}

const goBackReview7= () => {
  window.history.back();
  location.replace("../ReviewPage/7_ReviewPage6.html");
};

/*StudentPage*/

document.addEventListener('DOMContentLoaded', (event) => {
  const checkboxes_S1 = document.querySelectorAll('#page1Options_S input[type="checkbox"]');
  
  // Load saved selections from local storage
  const savedSelections_S1 = JSON.parse(localStorage.getItem('selectedOptions_S1')) || [];
  savedSelections_S1.forEach(option => {
      const checkbox_S1 = document.querySelector(`input[value="${option}"]`);
      if (checkbox_S1) {
        checkbox_S1.checked = true;
      }
  });

  // Limit the number of selected options to 3
  checkboxes_S1.forEach(checkbox_S1 => {
    checkbox_S1.addEventListener('change', (event) => {
          const checkedCheckboxes_S1 = document.querySelectorAll('input[type="checkbox"]:checked');
          if (checkedCheckboxes_S1.length > 3) {
              event.target.checked = false;
              alert('You can only select up to 3 options.');
          }
      });
  });
});

function saveSelectionPage_S1() {
  const checkboxes_S1 = document.querySelectorAll('input[type="checkbox"]');
  const selectedOptions_S1 = [];
  checkboxes_S1.forEach(checkbox_S1 => {
      if (checkbox_S1.checked) {
        selectedOptions_S1.push(checkbox_S1.value);
      }
  });
  localStorage.setItem('selectedOptions_S1', JSON.stringify(selectedOptions_S1));
  //location.replace('../StudentPage/3_SPage2.html')
}

const goBackPageDSP_S1  = () => {
  window.history.back();
  location.replace("../StudentPage/1_SDeepsea.html");
  };

  /** Page 2 Student */

document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes_S2 = document.querySelectorAll('#page2Options_S2 input[type="checkbox"]');
    
  // Load saved selection from local storage
  const savedSelection_S2 = localStorage.getItem('selectedOption_S2');
  if (savedSelection_S2) {
      const checkbox_S2 = document.querySelector(`#page2Options_S2 input[value="${savedSelection_S2}"]`);
      if (checkbox_S2) {
        checkbox_S2.checked = true;
      }
  }

  // Ensure only one option is selected at a time
  checkboxes_S2.forEach(checkbox_S2 => {
    checkbox_S2.addEventListener('change', (event) => {
          if (event.target.checked) {
            checkboxes_S2.forEach(cb => {
                  if (cb !== event.target) {
                      cb.checked = false;
                  }
              });
          }
      });
  });
});
  
function saveSelectionPage_S2() {
  var selectedIds = [];
  $('#checkbox-containerS2 input[type=checkbox]:checked').each(function() {
      selectedIds.push($(this).val()); // Collect selected checkbox values
  });

  // Ensure exactly one option is selected
  if (selectedIds.length === 1) {
      localStorage.setItem('selectedOptions_S2', JSON.stringify(selectedIds));
      console.log('Selections saved for Page 2:', selectedIds);
      location.replace('../StudentPage/4_SPage3.html')
  } else {
      alert('Please select exactly 1 option.');
  }
}


  
  const goBackPageDSP_S2  = () => {
    window.history.back();
    location.replace("../StudentPage/2_SPage1.html");
    };

   
/**/// */
document.addEventListener('DOMContentLoaded', (event) => {
      const checkboxes_S3 = document.querySelectorAll('#page3Options_S3 input[type="checkbox"]');
      
    // Load saved selection from local storage
    const savedSelection_S3 = localStorage.getItem('selectedOption_S3');
    if (savedSelection_S3) {
        const checkbox_S3 = document.querySelector(`#page3Options_S3 input[value="${savedSelection_S3}"]`);
        if (checkbox_S3) {
          checkbox_S3.checked = true;
        }
    }
  
    // Ensure only one option is selected at a time
    checkboxes_S3.forEach(checkbox_S3 => {
      checkbox_S3.addEventListener('change', (event) => {
            if (event.target.checked) {
              checkboxes_S3.forEach(cb => {
                    if (cb !== event.target) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
  });
    
    function saveSelectionPage_S3() {
      var selectedIds = [];
  $('#checkbox-containerS3 input[type=checkbox]:checked').each(function() {
      selectedIds.push($(this).val()); // Collect selected checkbox values
  });

  // Ensure exactly one option is selected
  if (selectedIds.length === 1) {
      localStorage.setItem('selectedOptions_S3', JSON.stringify(selectedIds));
      console.log('Selections saved for Page 3:', selectedIds);
      location.replace('../StudentPage/5_SPage4.html')
  } else {
      alert('Please select exactly 1 option.');
  }
}
    
    const goBackPageDSP_S3  = () => {
      window.history.back();
      location.replace("../StudentPage/3_SPage2.html");
      };


/**/// */
document.addEventListener('DOMContentLoaded', (event) => {
  const checkboxes_S4 = document.querySelectorAll('#page4Options_S4 input[type="checkbox"]');
  
// Load saved selection from local storage
const savedSelection_S4 = localStorage.getItem('selectedOption_S4');
if (savedSelection_S4) {
    const checkbox_S4 = document.querySelector(`#page4Options_S4 input[value="${savedSelection_S4}"]`);
    if (checkbox_S4) {
      checkbox_S4.checked = true;
    }
}

// Ensure only one option is selected at a time
checkboxes_S4.forEach(checkbox_S4 => {
  checkbox_S4.addEventListener('change', (event) => {
        if (event.target.checked) {
          checkboxes_S4.forEach(cb => {
                if (cb !== event.target) {
                    cb.checked = false;
                }
            });
        }
    });
});
});

function saveSelectionPage_S4() {
  var selectedIds = [];
  $('#checkbox-containerS4 input[type=checkbox]:checked').each(function() {
      selectedIds.push($(this).val()); // Collect selected checkbox values
  });

  // Ensure exactly one option is selected
  if (selectedIds.length === 1) {
      localStorage.setItem('selectedOptions_S4', JSON.stringify(selectedIds));
      console.log('Selections saved for Page 4:', selectedIds);
      location.replace('../StudentPage/6_SPage5.html')
  } else {
      alert('Please select exactly 1 option.');
  }
}

const goBackPageDSP_S4  = () => {
  window.history.back();
  location.replace("../StudentPage/4_SPage3.html");
  };


/**/// */
document.addEventListener('DOMContentLoaded', (event) => {
  const checkboxes_S5 = document.querySelectorAll('#page5Options_S5 input[type="checkbox"]');
  
  // Load saved selections from local storage
  const savedSelections_S5 = JSON.parse(localStorage.getItem('selectedOptions_S5')) || [];
  savedSelections_S5.forEach(option_2 => {
      const checkbox_S5 = document.querySelector(`input[value="${option_2}"]`);
      if (checkbox_S5) {
        checkbox_S5.checked = true;
      }
  });

  // Limit the number of selected options to 3
  checkboxes_S5.forEach(checkbox_S5 => {
    checkbox_S5.addEventListener('change', (event) => {
          const checkedCheckboxes_S5 = document.querySelectorAll('input[type="checkbox"]:checked');
          if (checkedCheckboxes_S5.length > 3) {
              event.target.checked = false;
              alert('You can only select up to 3 options.');
          }
      });
  });
});

function saveSelectionPage_S5() {
  const checkboxes_S5 = document.querySelectorAll('input[type="checkbox"]');
  const selectedOptions_S5 = [];
  checkboxes_S5.forEach(checkbox_S5 => {
      if (checkbox_S5.checked) {
        selectedOptions_S5.push(checkbox_S5.value);
      }
  });
  localStorage.setItem('selectedOptions_S5', JSON.stringify(selectedOptions_S5));
}

const goBackPageDSP_S5  = () => {
  window.history.back();
  location.replace("../StudentPage/5_Page4.html");
  };