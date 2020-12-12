
<script>
import VueSanitize from "vue-sanitize";
let defaults = VueSanitize.defaults;

export default {
  name: "AppRenderHtml",
  props: {
    html: {
      required: true,
      type: String,
    },
  },
  render(createRender) {
    const clean = this.$sanitize(this.html, {
      allowedTags: defaults.allowedTags.concat(["define"]),
      allowedAttributes: {
        ...defaults.allowedAttributes,
        define: ["word"],
      },
    });

    const render = {
      template: `<span>${clean}</span>`,
      data: () => ({
        framework: "Vue",
      }),
    };
    return createRender(render);
  },
};
</script>
