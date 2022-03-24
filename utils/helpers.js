module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return `${new Date(date).getMonth()}/${new Date(date).getDate()}/  ${new Date(date).getFullYear()}`;
    }
}
    