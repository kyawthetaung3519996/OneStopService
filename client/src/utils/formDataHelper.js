export function objectToFormData(
  obj,
  namespace = null,
  formData = new FormData()
) {
  for (let propertyName in obj) {
    if (isValidProperty(obj, propertyName)) {
      const formKey = getFormKey(namespace, propertyName);
      appendToFormData(formData, formKey, obj[propertyName]);
    }
  }
  return formData;
}

function isValidProperty(obj, propertyName) {
  return (
    Object.prototype.hasOwnProperty.call(obj, propertyName) &&
    obj[propertyName] !== undefined &&
    obj[propertyName] !== null
  );
}

function getFormKey(namespace, propertyName) {
  return namespace ? `${namespace}[${propertyName}]` : propertyName;
}

function appendToFormData(formData, formKey, value) {
  if (value instanceof Date) {
    appendAsData(formData, formKey, value);
  } else if (isObjectButNotFile(value)) {
    objectToFormData(value, formKey, formData)
  } else {
    formData.append(formKey, value);
  }
}

function appendAsData(formData, formKey, data) {
  formData.append(formKey, data.toISOString());
}

function isObjectButNotFile(value) {
  return typeof value === "object" && !(value instanceof File);
}
