!(function (t) {
  for (let t of __jqdeferred) $(t);
  __jqdeferred.length = 0;
  class e {
    constructor(t) {
      this._css = t;
    }
    css() {
      return this._css;
    }
    $(t) {
      return (!t && this._cache) || (this._cache = $(this._css));
    }
    join(t, i) {
      return new e(this._css + i + t._css);
    }
    or(t) {
      return this.join(t, ", ");
    }
    and(t) {
      return this.join(t, "");
    }
    anscestorOf(t) {
      return this.join(t, " ");
    }
    parentOf(t) {
      return this.join(t, ">");
    }
    followedBy(t) {
      return this.join(t, "~");
    }
    immediatelyFollowedBy(t) {
      return this.join(t, "+");
    }
    exists(t) {
      return this.$(t).length > 0;
    }
    addClass(t) {
      return this.$().addClass(t.name()), this;
    }
    addClasses(...t) {
      const e = t.map((t) => t.name()).join(" ");
      return this.$().addClass(e), this;
    }
    removeClass(t) {
      return this.$().removeClass(t.name()), this;
    }
    removeClasses(...t) {
      const e = t.map((t) => t.name()).join(" ");
      return this.$().removeClass(e), this;
    }
    setClasses(...t) {
      const e = t.map((t) => t.name()).join(" ");
      return this.$().attr("class", e), this;
    }
    toggleClass(t, e) {
      return this.$().toggleClass(t.name(), e), this;
    }
    toggleClasses(t, ...e) {
      const i = e.map((t) => t.name()).join(" ");
      return this.$().toggleClass(i, t), this;
    }
    hasClass(t) {
      return this.$().hasClass(t.name());
    }
    addAttr(t) {
      return this.$().attr(t, t), this;
    }
    toggleAttr(t, e) {
      return e ? this.$().attr(t, t) : this.$().removeAttr(t), this;
    }
    removeAttr(t) {
      return this.$().removeAttr(t), this;
    }
  }
  class i extends e {
    tag() {
      return this.css();
    }
    constructor(t) {
      super(t);
    }
  }
  class r extends e {
    name() {
      return this._name;
    }
    constructor(t) {
      super("." + t), (this._name = t);
    }
    elements() {
      return document.querySelectorAll(this.css());
    }
  }
  class n extends e {
    name() {
      return this._name;
    }
    constructor(t) {
      super("#" + t), (this._name = t);
    }
    el() {
      return document.getElementById(this._name);
    }
  }
  class s {
    constructor(t) {
      (this.key = t), (this.caseSensitive = !0);
    }
    caseInsensitive() {
      return (this.caseSensitive = !1), this;
    }
    exists() {
      return new e("[" + this.key + "]");
    }
    build(t, i) {
      return new e("[" + this.key + t + '"' + i + '"' + (this.caseSensitive ? "" : " i") + "]");
    }
    equals(t) {
      return this.build("=", t);
    }
    containsWhitespaceSeparatedToken(t) {
      return this.build("~=", t);
    }
    equalsOrPlusDashStartsWith(t) {
      return this.build("|=", t);
    }
    startsWith(t) {
      return this.build("^=", t);
    }
    endsWidth(t) {
      return this.build("$=", t);
    }
    contains(t) {
      return this.build("*=", t);
    }
  }
  var o, a, h, c, l, u, d, p, m, f, g, w, v, b, y, x, S, C, T, P, A, k, M, I, F, R, E, O, _, D, L, B, G, U, W, z, N, X, H, V, Y, q, j, Q, Z, J, K, tt, et, it;
  !(function (t) {
    function o(t) {
      return new s(t);
    }
    (t.empty = new e("")),
      (t.html = new e("html")),
      (t.body = new e("body")),
      (t.htmlBody = new e("html, body")),
      (t.$window = $(window)),
      (t.data = function (t) {
        return o("data-" + t);
      }),
      (t.attr = o),
      (t.id = function (t) {
        return new n(t);
      }),
      (t.c = function (t) {
        return new r(t);
      }),
      (t.tag = function (t) {
        return new i(t);
      });
  })(a || (a = {})),
    (function (t) {
      t.active = new r("active");
    })(o || (o = {})),
    (function (t) {
      let e, i, r, n, s, o, a, h, c, l, u, d, p, m, f, g, w;
      (t.active_key = t.c("active_key")),
        (t.app_is_visible = t.c("app_is_visible")),
        (t.app_starter = t.c("app_starter")),
        (t.bttn = t.c("bttn")),
        (t.bttn_dark = t.c("bttn_dark")),
        (t.bttn_green = t.c("bttn_green")),
        (t.bttn_icon_left = t.c("bttn_icon_left")),
        (t.bttn_icon_right = t.c("bttn_icon_right")),
        (t.bttn_red = t.c("bttn_red")),
        (t.bttn_short = t.c("bttn_short")),
        (t.bttn_white = t.c("bttn_white")),
        (t.bttn_wire = t.c("bttn_wire")),
        (t.bttn_wire_white = t.c("bttn_wire_white")),
        (t.cannot_run_app = t.c("cannot_run_app")),
        (t.canvas_container = t.c("canvas_container")),
        (t.chart = t.c("chart")),
        (t.checkmark = t.c("checkmark")),
        (t.checkmark_check = t.c("checkmark_check")),
        (t.ctl_key = t.c("ctl_key")),
        (t.dark_checker = t.c("dark_checker")),
        (t.download = t.c("download")),
        (t.downloadAll = t.c("downloadAll")),
        (t.drop_ready = t.c("drop_ready")),
        (t.dropdown_auto = t.c("dropdown_auto")),
        (t.format_toggle = t.c("format_toggle")),
        (t.grab_closed = t.c("grab_closed")),
        (t.grab_open = t.c("grab_open")),
        (t.isFree = t.c("isFree")),
        (t.isPaid = t.c("isPaid")),
        (t.jsNotInitializedYet = t.c("jsNotInitializedYet")),
        (t.modern_menu = t.c("modern_menu")),
        (t.noselect = t.c("noselect")),
        (t.paste_buttons = t.c("paste_buttons")),
        (t.pasted = t.c("pasted")),
        (t.popup_drop_target_container = t.c("popup_drop_target_container")),
        (t.popup_drop_target_particles_container = t.c("popup_drop_target_particles_container")),
        (t.svgz_toggle = t.c("svgz_toggle")),
        (t.tabLink = t.c("tabLink")),
        (t.v_key = t.c("v_key")),
        (t.viewer_green_button = t.c("viewer_green_button")),
        (t.wrong_shake = t.c("wrong_shake")),
        (function (e) {
          let i, r, n, s, o, a, h;
          (e.App = t.id("App-App")),
            (e.DownloadLink = t.id("App-DownloadLink")),
            (e.ModernizrAlert = t.id("App-ModernizrAlert")),
            (e.ProgressLightbox = t.id("App-ProgressLightbox")),
            (e.appView = t.id("App-appView")),
            (e.cancel_upload = t.c("App-cancel_upload")),
            (e.exit_app = t.c("App-exit_app")),
            (e.feedback_link = t.c("App-feedback_link")),
            (e.force_exit = t.c("App-force_exit")),
            (e.new_from_url_link = t.c("App-new_from_url_link")),
            (e.starter = t.c("App-starter")),
            (function (e) {
              (e.Dialog = t.id("App-Error-Dialog")), (e.Message = t.id("App-Error-Message")), (e.RetryButton = t.id("App-Error-RetryButton"));
            })((i = e.Error || (e.Error = {}))),
            (function (e) {
              (e.Dialog = t.id("App-Feedback-Dialog")), (e.DialogShare = t.id("App-Feedback-DialogShare")), (e.Message = t.id("App-Feedback-Message")), (e.Submit = t.id("App-Feedback-Submit"));
            })((r = e.Feedback || (e.Feedback = {}))),
            (function (e) {
              (e.CanvasContainer = t.id("App-ImageView-CanvasContainer")), (e.LeftCanvas = t.id("App-ImageView-LeftCanvas")), (e.RightCanvas = t.id("App-ImageView-RightCanvas")), (e.single_pane = t.c("App-ImageView-single_pane"));
            })((n = e.ImageView || (e.ImageView = {}))),
            (function (e) {
              let i, r, n;
              (e.Dialog = t.id("App-Progress-Dialog")),
                (e.bar = t.c("App-Progress-bar")),
                (e.progress = t.c("App-Progress-progress")),
                (function (e) {
                  (e.Bar = t.id("App-Progress-Download-Bar")), (e.Pane = t.id("App-Progress-Download-Pane"));
                })(i || (i = {})),
                (e.Download = i),
                (function (e) {
                  (e.Bar = t.id("App-Progress-Process-Bar")), (e.Pane = t.id("App-Progress-Process-Pane"));
                })(r || (r = {})),
                (e.Process = r),
                (function (e) {
                  (e.Bar = t.id("App-Progress-Upload-Bar")), (e.Pane = t.id("App-Progress-Upload-Pane"));
                })(n || (n = {})),
                (e.Upload = n);
            })((s = e.Progress || (e.Progress = {}))),
            (function (e) {
              (e.Bar = t.id("App-ProgressLightboxBar-Bar")), (e.Pane = t.id("App-ProgressLightboxBar-Pane"));
            })(o || (o = {})),
            (e.ProgressLightboxBar = o),
            (function (e) {
              let i;
              (e.Exit = t.id("App-SubApps-Exit")),
                (e.LightBox = t.id("App-SubApps-LightBox")),
                (e.View = t.id("App-SubApps-View")),
                (function (e) {
                  (e.Cancel = t.id("App-SubApps-Palette-Cancel")),
                    (e.Ok = t.id("App-SubApps-Palette-Ok")),
                    (e.Reset = t.id("App-SubApps-Palette-Reset")),
                    (e.active = t.c("App-SubApps-Palette-active")),
                    (e.chosen = t.c("App-SubApps-Palette-chosen")),
                    (e.container = t.c("App-SubApps-Palette-container")),
                    (e.recommended = t.c("App-SubApps-Palette-recommended")),
                    (e.swatch = t.c("App-SubApps-Palette-swatch"));
                })((i = e.Palette || (e.Palette = {})));
            })((a = e.SubApps || (e.SubApps = {}))),
            (function (e) {
              (e.Exit = t.id("App-Toolbar-Exit")),
                (e.NumPanesGroup = t.id("App-Toolbar-NumPanesGroup")),
                (e.Palette = t.id("App-Toolbar-Palette")),
                (e.PaletteNumColors = t.id("App-Toolbar-PaletteNumColors")),
                (e.Redo = t.id("App-Toolbar-Redo")),
                (e.Reset = t.id("App-Toolbar-Reset")),
                (e.ResultReview = t.id("App-Toolbar-ResultReview")),
                (e.Revert = t.id("App-Toolbar-Revert")),
                (e.RevertMenu = t.id("App-Toolbar-RevertMenu")),
                (e.SegEditor = t.id("App-Toolbar-SegEditor")),
                (e.ThumbsDown = t.id("App-Toolbar-ThumbsDown")),
                (e.ThumbsUp = t.id("App-Toolbar-ThumbsUp")),
                (e.ThumbsUpDown = t.id("App-Toolbar-ThumbsUpDown")),
                (e.Undo = t.id("App-Toolbar-Undo")),
                (e.ViewBitmap = t.id("App-Toolbar-ViewBitmap")),
                (e.ViewSingle = t.id("App-Toolbar-ViewSingle")),
                (e.ViewSplit = t.id("App-Toolbar-ViewSplit")),
                (e.Zoom1To1 = t.id("App-Toolbar-Zoom1To1")),
                (e.ZoomIn = t.id("App-Toolbar-ZoomIn")),
                (e.ZoomOut = t.id("App-Toolbar-ZoomOut")),
                (e.ZoomToFit = t.id("App-Toolbar-ZoomToFit")),
                (e.revert_link = t.c("App-Toolbar-revert_link")),
                (e.revert_swatch = t.c("App-Toolbar-revert_swatch"));
            })((h = e.Toolbar || (e.Toolbar = {})));
        })((e = t.App || (t.App = {}))),
        (function (e) {
          (e.container = t.c("BeforeAfter-container")), (e.divider = t.c("BeforeAfter-divider")), (e.second_row = t.c("BeforeAfter-second_row")), (e.try_this_btn = t.c("BeforeAfter-try_this_btn"));
        })((i = t.BeforeAfter || (t.BeforeAfter = {}))),
        (function (e) {
          (e.indicator = t.c("BinaryToggle-indicator")), (e.indicator_inner = t.c("BinaryToggle-indicator_inner")), (e.option = t.c("BinaryToggle-option")), (e.option_left = t.c("BinaryToggle-option_left")), (e.option_right = t.c("BinaryToggle-option_right")), (e.toggle = t.c("BinaryToggle-toggle"));
        })((r = t.BinaryToggle || (t.BinaryToggle = {}))),
        (function (e) {
          (e.grab_closed = t.c("Cursor-grab_closed")), (e.move = t.c("Cursor-move")), (e.resize_ew = t.c("Cursor-resize_ew")), (e.resize_nesw = t.c("Cursor-resize_nesw")), (e.resize_ns = t.c("Cursor-resize_ns")), (e.resize_nwse = t.c("Cursor-resize_nwse"));
        })((n = t.Cursor || (t.Cursor = {}))),
        (function (e) {
          (e.Dialog = t.id("FatalError-Dialog")), (e.Message = t.id("FatalError-Message"));
        })((s = t.FatalError || (t.FatalError = {}))),
        (function (e) {
          let i;
          (e.Field = t.id("FileInput-Field")),
            (e.PasteTarget = t.id("FileInput-PasteTarget")),
            (e.click_to_upload = t.c("FileInput-click_to_upload")),
            (function (e) {
              (e.Dialog = t.id("FileInput-UploadFromWeb-Dialog")), (e.DialogButton = t.id("FileInput-UploadFromWeb-DialogButton")), (e.DialogInput = t.id("FileInput-UploadFromWeb-DialogInput")), (e.MainButton = t.id("FileInput-UploadFromWeb-MainButton")), (e.MainInput = t.id("FileInput-UploadFromWeb-MainInput")), (e.show_dialog = t.c("FileInput-UploadFromWeb-show_dialog"));
            })((i = e.UploadFromWeb || (e.UploadFromWeb = {})));
        })((o = t.FileInput || (t.FileInput = {}))),
        (function (e) {
          (e.Id = t.id("Hurricane-Id")), (e.Labels = t.id("Hurricane-Labels")), (e.Line = t.id("Hurricane-Line")), (e.Outlines = t.id("Hurricane-Outlines")), (e.Shapes = t.id("Hurricane-Shapes")), (e.transformable = t.c("Hurricane-transformable"));
        })(a || (a = {})),
        (t.Hurricane = a),
        (function (e) {
          e.outer_container = t.c("ImageList-outer_container");
        })((h = t.ImageList || (t.ImageList = {}))),
        (function (e) {
          (e.capture = t.c("LevelSlider-capture")),
            (e.hover = t.c("LevelSlider-hover")),
            (e.label = t.c("LevelSlider-label")),
            (e.left_btn = t.c("LevelSlider-left_btn")),
            (e.line = t.c("LevelSlider-line")),
            (e.rect = t.c("LevelSlider-rect")),
            (e.right_btn = t.c("LevelSlider-right_btn")),
            (e.selected = t.c("LevelSlider-selected")),
            (e.tic = t.c("LevelSlider-tic")),
            (e.zone = t.c("LevelSlider-zone"));
        })((c = t.LevelSlider || (t.LevelSlider = {}))),
        (function (e) {
          let i, r, n, s, o, a, h, c, l, u, d, p, m, f, g;
          (e.ResetForm = t.id("Options-ResetForm")),
            (e.container = t.c("Options-container")),
            (e.form_row = t.c("Options-form_row")),
            (function (e) {
              let i, r, n, s;
              (e.group = t.c("Options-AllowedCurveTypesGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-AllowedCurveTypesGroup-Bezier-attribute")), (e.input = t.c("Options-AllowedCurveTypesGroup-Bezier-input")), (e.row = t.c("Options-AllowedCurveTypesGroup-Bezier-row"));
                })(i || (i = {})),
                (e.Bezier = i),
                (function (e) {
                  (e.attribute = t.c("Options-AllowedCurveTypesGroup-CircularArc-attribute")), (e.input = t.c("Options-AllowedCurveTypesGroup-CircularArc-input")), (e.row = t.c("Options-AllowedCurveTypesGroup-CircularArc-row"));
                })(r || (r = {})),
                (e.CircularArc = r),
                (function (e) {
                  (e.attribute = t.c("Options-AllowedCurveTypesGroup-EllipticalArc-attribute")), (e.input = t.c("Options-AllowedCurveTypesGroup-EllipticalArc-input")), (e.row = t.c("Options-AllowedCurveTypesGroup-EllipticalArc-row"));
                })(n || (n = {})),
                (e.EllipticalArc = n),
                (function (e) {
                  (e.attribute = t.c("Options-AllowedCurveTypesGroup-Quad-attribute")), (e.input = t.c("Options-AllowedCurveTypesGroup-Quad-input")), (e.row = t.c("Options-AllowedCurveTypesGroup-Quad-row"));
                })(s || (s = {})),
                (e.Quad = s);
            })(i || (i = {})),
            (e.AllowedCurveTypesGroup = i),
            (function (e) {
              let i, r, n;
              (e.group = t.c("Options-DrawStyleGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-DrawStyleGroup-FillShapes-attribute")), (e.input = t.c("Options-DrawStyleGroup-FillShapes-input")), (e.row = t.c("Options-DrawStyleGroup-FillShapes-row"));
                })(i || (i = {})),
                (e.FillShapes = i),
                (function (e) {
                  (e.attribute = t.c("Options-DrawStyleGroup-StrokeEdges-attribute")), (e.input = t.c("Options-DrawStyleGroup-StrokeEdges-input")), (e.row = t.c("Options-DrawStyleGroup-StrokeEdges-row"));
                })(r || (r = {})),
                (e.StrokeEdges = r),
                (function (e) {
                  (e.attribute = t.c("Options-DrawStyleGroup-StrokeShapes-attribute")), (e.input = t.c("Options-DrawStyleGroup-StrokeShapes-input")), (e.row = t.c("Options-DrawStyleGroup-StrokeShapes-row"));
                })(n || (n = {})),
                (e.StrokeShapes = n);
            })(r || (r = {})),
            (e.DrawStyleGroup = r),
            (function (e) {
              let i, r, n;
              (e.group = t.c("Options-DxfCompatibilityGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-DxfCompatibilityGroup-LinesAndArcs-attribute")), (e.input = t.c("Options-DxfCompatibilityGroup-LinesAndArcs-input")), (e.row = t.c("Options-DxfCompatibilityGroup-LinesAndArcs-row"));
                })(i || (i = {})),
                (e.LinesAndArcs = i),
                (function (e) {
                  (e.attribute = t.c("Options-DxfCompatibilityGroup-LinesArcsAndSplines-attribute")), (e.input = t.c("Options-DxfCompatibilityGroup-LinesArcsAndSplines-input")), (e.row = t.c("Options-DxfCompatibilityGroup-LinesArcsAndSplines-row"));
                })(r || (r = {})),
                (e.LinesArcsAndSplines = r),
                (function (e) {
                  (e.attribute = t.c("Options-DxfCompatibilityGroup-LinesOnly-attribute")), (e.input = t.c("Options-DxfCompatibilityGroup-LinesOnly-input")), (e.row = t.c("Options-DxfCompatibilityGroup-LinesOnly-row"));
                })(n || (n = {})),
                (e.LinesOnly = n);
            })(n || (n = {})),
            (e.DxfCompatibilityGroup = n),
            (function (e) {
              let i, r, n, s, o;
              (e.group = t.c("Options-FileFormatGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-FileFormatGroup-Dxf-attribute")), (e.input = t.c("Options-FileFormatGroup-Dxf-input")), (e.row = t.c("Options-FileFormatGroup-Dxf-row"));
                })(i || (i = {})),
                (e.Dxf = i),
                (function (e) {
                  (e.attribute = t.c("Options-FileFormatGroup-Eps-attribute")), (e.input = t.c("Options-FileFormatGroup-Eps-input")), (e.row = t.c("Options-FileFormatGroup-Eps-row"));
                })(r || (r = {})),
                (e.Eps = r),
                (function (e) {
                  (e.attribute = t.c("Options-FileFormatGroup-Pdf-attribute")), (e.input = t.c("Options-FileFormatGroup-Pdf-input")), (e.row = t.c("Options-FileFormatGroup-Pdf-row"));
                })(n || (n = {})),
                (e.Pdf = n),
                (function (e) {
                  (e.attribute = t.c("Options-FileFormatGroup-Png-attribute")), (e.input = t.c("Options-FileFormatGroup-Png-input")), (e.row = t.c("Options-FileFormatGroup-Png-row"));
                })(s || (s = {})),
                (e.Png = s),
                (function (e) {
                  (e.attribute = t.c("Options-FileFormatGroup-Svg-attribute")), (e.input = t.c("Options-FileFormatGroup-Svg-input")), (e.row = t.c("Options-FileFormatGroup-Svg-row"));
                })(o || (o = {})),
                (e.Svg = o);
            })(s || (s = {})),
            (e.FileFormatGroup = s),
            (function (e) {
              let i, r, n, s;
              (e.group = t.c("Options-GapFillerGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-GapFillerGroup-Clip-attribute")), (e.input = t.c("Options-GapFillerGroup-Clip-input")), (e.row = t.c("Options-GapFillerGroup-Clip-row"));
                })(i || (i = {})),
                (e.Clip = i),
                (function (e) {
                  (e.attribute = t.c("Options-GapFillerGroup-Enable-attribute")), (e.input = t.c("Options-GapFillerGroup-Enable-input")), (e.row = t.c("Options-GapFillerGroup-Enable-row"));
                })(r || (r = {})),
                (e.Enable = r),
                (function (e) {
                  (e.attribute = t.c("Options-GapFillerGroup-NonScalingStroke-attribute")), (e.input = t.c("Options-GapFillerGroup-NonScalingStroke-input")), (e.row = t.c("Options-GapFillerGroup-NonScalingStroke-row"));
                })(n || (n = {})),
                (e.NonScalingStroke = n),
                (function (e) {
                  (e.attribute = t.c("Options-GapFillerGroup-StrokeWidth-attribute")), (e.input = t.c("Options-GapFillerGroup-StrokeWidth-input")), (e.row = t.c("Options-GapFillerGroup-StrokeWidth-row"));
                })(s || (s = {})),
                (e.StrokeWidth = s);
            })(o || (o = {})),
            (e.GapFillerGroup = o),
            (function (e) {
              let i, r, n, s;
              (e.group = t.c("Options-GroupByGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-GroupByGroup-Color-attribute")), (e.input = t.c("Options-GroupByGroup-Color-input")), (e.row = t.c("Options-GroupByGroup-Color-row"));
                })(i || (i = {})),
                (e.Color = i),
                (function (e) {
                  (e.attribute = t.c("Options-GroupByGroup-Layer-attribute")), (e.input = t.c("Options-GroupByGroup-Layer-input")), (e.row = t.c("Options-GroupByGroup-Layer-row"));
                })(r || (r = {})),
                (e.Layer = r),
                (function (e) {
                  (e.attribute = t.c("Options-GroupByGroup-None-attribute")), (e.input = t.c("Options-GroupByGroup-None-input")), (e.row = t.c("Options-GroupByGroup-None-row"));
                })(n || (n = {})),
                (e.None = n),
                (function (e) {
                  (e.attribute = t.c("Options-GroupByGroup-Parent-attribute")), (e.input = t.c("Options-GroupByGroup-Parent-input")), (e.row = t.c("Options-GroupByGroup-Parent-row"));
                })(s || (s = {})),
                (e.Parent = s);
            })(a || (a = {})),
            (e.GroupByGroup = a),
            (function (e) {
              e.group = t.c("Options-LineFitGroup-group");
            })(h || (h = {})),
            (e.LineFitGroup = h),
            (function (e) {
              let i, r, n, s, o, a;
              (e.group = t.c("Options-OutputUnitGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-OutputUnitGroup-Cm-attribute")), (e.input = t.c("Options-OutputUnitGroup-Cm-input")), (e.row = t.c("Options-OutputUnitGroup-Cm-row"));
                })(i || (i = {})),
                (e.Cm = i),
                (function (e) {
                  (e.attribute = t.c("Options-OutputUnitGroup-Inches-attribute")), (e.input = t.c("Options-OutputUnitGroup-Inches-input")), (e.row = t.c("Options-OutputUnitGroup-Inches-row"));
                })(r || (r = {})),
                (e.Inches = r),
                (function (e) {
                  (e.attribute = t.c("Options-OutputUnitGroup-Mm-attribute")), (e.input = t.c("Options-OutputUnitGroup-Mm-input")), (e.row = t.c("Options-OutputUnitGroup-Mm-row"));
                })(n || (n = {})),
                (e.Mm = n),
                (function (e) {
                  (e.attribute = t.c("Options-OutputUnitGroup-None-attribute")), (e.input = t.c("Options-OutputUnitGroup-None-input")), (e.row = t.c("Options-OutputUnitGroup-None-row"));
                })(s || (s = {})),
                (e.None = s),
                (function (e) {
                  (e.attribute = t.c("Options-OutputUnitGroup-Pt-attribute")), (e.input = t.c("Options-OutputUnitGroup-Pt-input")), (e.row = t.c("Options-OutputUnitGroup-Pt-row"));
                })(o || (o = {})),
                (e.Pt = o),
                (function (e) {
                  (e.attribute = t.c("Options-OutputUnitGroup-Px-attribute")), (e.input = t.c("Options-OutputUnitGroup-Px-input")), (e.row = t.c("Options-OutputUnitGroup-Px-row"));
                })(a || (a = {})),
                (e.Px = a);
            })(c || (c = {})),
            (e.OutputUnitGroup = c),
            (function (e) {
              let i;
              (e.group = t.c("Options-ParameterizedShapesGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-ParameterizedShapesGroup-Flatten-attribute")), (e.input = t.c("Options-ParameterizedShapesGroup-Flatten-input")), (e.row = t.c("Options-ParameterizedShapesGroup-Flatten-row"));
                })(i || (i = {})),
                (e.Flatten = i);
            })(l || (l = {})),
            (e.ParameterizedShapesGroup = l),
            (function (e) {
              let i, r;
              (e.group = t.c("Options-PdfCompressionModeGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-PdfCompressionModeGroup-Deflate-attribute")), (e.input = t.c("Options-PdfCompressionModeGroup-Deflate-input")), (e.row = t.c("Options-PdfCompressionModeGroup-Deflate-row"));
                })(i || (i = {})),
                (e.Deflate = i),
                (function (e) {
                  (e.attribute = t.c("Options-PdfCompressionModeGroup-None-attribute")), (e.input = t.c("Options-PdfCompressionModeGroup-None-input")), (e.row = t.c("Options-PdfCompressionModeGroup-None-row"));
                })(r || (r = {})),
                (e.None = r);
            })(u || (u = {})),
            (e.PdfCompressionModeGroup = u),
            (function (e) {
              let i, r;
              (e.group = t.c("Options-ShapeStackingGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-ShapeStackingGroup-Cutouts-attribute")), (e.input = t.c("Options-ShapeStackingGroup-Cutouts-input")), (e.row = t.c("Options-ShapeStackingGroup-Cutouts-row"));
                })(i || (i = {})),
                (e.Cutouts = i),
                (function (e) {
                  (e.attribute = t.c("Options-ShapeStackingGroup-Stacked-attribute")), (e.input = t.c("Options-ShapeStackingGroup-Stacked-input")), (e.row = t.c("Options-ShapeStackingGroup-Stacked-row"));
                })(r || (r = {})),
                (e.Stacked = r);
            })(d || (d = {})),
            (e.ShapeStackingGroup = d),
            (function (e) {
              let i, r, n, s;
              (e.group = t.c("Options-SizeGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-SizeGroup-Height-attribute")), (e.input = t.c("Options-SizeGroup-Height-input")), (e.row = t.c("Options-SizeGroup-Height-row"));
                })(i || (i = {})),
                (e.Height = i),
                (function (e) {
                  (e.attribute = t.c("Options-SizeGroup-OutputDpi-attribute")), (e.input = t.c("Options-SizeGroup-OutputDpi-input")), (e.row = t.c("Options-SizeGroup-OutputDpi-row"));
                })(r || (r = {})),
                (e.OutputDpi = r),
                (function (e) {
                  (e.attribute = t.c("Options-SizeGroup-Scale-attribute")), (e.input = t.c("Options-SizeGroup-Scale-input")), (e.row = t.c("Options-SizeGroup-Scale-row"));
                })(n || (n = {})),
                (e.Scale = n),
                (function (e) {
                  (e.attribute = t.c("Options-SizeGroup-Width-attribute")), (e.input = t.c("Options-SizeGroup-Width-input")), (e.row = t.c("Options-SizeGroup-Width-row"));
                })(s || (s = {})),
                (e.Width = s);
            })(p || (p = {})),
            (e.SizeGroup = p),
            (function (e) {
              let i, r, n, s;
              (e.group = t.c("Options-StrokeStyleGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-StrokeStyleGroup-Color-attribute")), (e.input = t.c("Options-StrokeStyleGroup-Color-input")), (e.row = t.c("Options-StrokeStyleGroup-Color-row"));
                })(i || (i = {})),
                (e.Color = i),
                (function (e) {
                  (e.attribute = t.c("Options-StrokeStyleGroup-NonScalingStroke-attribute")), (e.input = t.c("Options-StrokeStyleGroup-NonScalingStroke-input")), (e.row = t.c("Options-StrokeStyleGroup-NonScalingStroke-row"));
                })(r || (r = {})),
                (e.NonScalingStroke = r),
                (function (e) {
                  (e.attribute = t.c("Options-StrokeStyleGroup-StrokeWidth-attribute")), (e.input = t.c("Options-StrokeStyleGroup-StrokeWidth-input")), (e.row = t.c("Options-StrokeStyleGroup-StrokeWidth-row"));
                })(n || (n = {})),
                (e.StrokeWidth = n),
                (function (e) {
                  (e.attribute = t.c("Options-StrokeStyleGroup-UseOverrideColor-attribute")), (e.input = t.c("Options-StrokeStyleGroup-UseOverrideColor-input")), (e.row = t.c("Options-StrokeStyleGroup-UseOverrideColor-row"));
                })(s || (s = {})),
                (e.UseOverrideColor = s);
            })(m || (m = {})),
            (e.StrokeStyleGroup = m),
            (function (e) {
              let i, r;
              (e.group = t.c("Options-SvgOptionsGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-SvgOptionsGroup-AdobeCompatibilityMode-attribute")), (e.input = t.c("Options-SvgOptionsGroup-AdobeCompatibilityMode-input")), (e.row = t.c("Options-SvgOptionsGroup-AdobeCompatibilityMode-row"));
                })(i || (i = {})),
                (e.AdobeCompatibilityMode = i),
                (function (e) {
                  (e.attribute = t.c("Options-SvgOptionsGroup-FixedSize-attribute")), (e.input = t.c("Options-SvgOptionsGroup-FixedSize-input")), (e.row = t.c("Options-SvgOptionsGroup-FixedSize-row"));
                })(r || (r = {})),
                (e.FixedSize = r);
            })(f || (f = {})),
            (e.SvgOptionsGroup = f),
            (function (e) {
              let i, r, n;
              (e.group = t.c("Options-SvgVersionGroup-group")),
                (function (e) {
                  (e.attribute = t.c("Options-SvgVersionGroup-Svg_1_0-attribute")), (e.input = t.c("Options-SvgVersionGroup-Svg_1_0-input")), (e.row = t.c("Options-SvgVersionGroup-Svg_1_0-row"));
                })(i || (i = {})),
                (e.Svg_1_0 = i),
                (function (e) {
                  (e.attribute = t.c("Options-SvgVersionGroup-Svg_1_1-attribute")), (e.input = t.c("Options-SvgVersionGroup-Svg_1_1-input")), (e.row = t.c("Options-SvgVersionGroup-Svg_1_1-row"));
                })(r || (r = {})),
                (e.Svg_1_1 = r),
                (function (e) {
                  (e.attribute = t.c("Options-SvgVersionGroup-Svg_Tiny_1_2-attribute")), (e.input = t.c("Options-SvgVersionGroup-Svg_Tiny_1_2-input")), (e.row = t.c("Options-SvgVersionGroup-Svg_Tiny_1_2-row"));
                })(n || (n = {})),
                (e.Svg_Tiny_1_2 = n);
            })(g || (g = {})),
            (e.SvgVersionGroup = g);
        })((l = t.Options || (t.Options = {}))),
        (function (e) {
          let i;
          (e.App = t.id("PreCrop-App")),
            (e.ViewContainer = t.id("PreCrop-ViewContainer")),
            (function (e) {
              let i;
              (e.cancel_button = t.c("PreCrop-Sidebar-cancel_button")),
                (e.crop_button = t.c("PreCrop-Sidebar-crop_button")),
                (e.cropped_image_aspect_ratio_display = t.c("PreCrop-Sidebar-cropped_image_aspect_ratio_display")),
                (e.cropped_image_megapixels_display = t.c("PreCrop-Sidebar-cropped_image_megapixels_display")),
                (e.cropped_image_size_display = t.c("PreCrop-Sidebar-cropped_image_size_display")),
                (e.cropped_image_success = t.c("PreCrop-Sidebar-cropped_image_success")),
                (e.cropped_image_warning = t.c("PreCrop-Sidebar-cropped_image_warning")),
                (e.input_image_aspect_ratio_display = t.c("PreCrop-Sidebar-input_image_aspect_ratio_display")),
                (e.input_image_megapixels_display = t.c("PreCrop-Sidebar-input_image_megapixels_display")),
                (e.input_image_size_display = t.c("PreCrop-Sidebar-input_image_size_display")),
                (e.lock_aspect_ratio_button = t.c("PreCrop-Sidebar-lock_aspect_ratio_button")),
                (function (e) {
                  (e.container = t.c("PreCrop-Sidebar-MaxNumMegapixels-container")), (e.decrease = t.c("PreCrop-Sidebar-MaxNumMegapixels-decrease")), (e.display = t.c("PreCrop-Sidebar-MaxNumMegapixels-display")), (e.increase = t.c("PreCrop-Sidebar-MaxNumMegapixels-increase")), (e.reset = t.c("PreCrop-Sidebar-MaxNumMegapixels-reset"));
                })(i || (i = {})),
                (e.MaxNumMegapixels = i);
            })((i = e.Sidebar || (e.Sidebar = {})));
        })((u = t.PreCrop || (t.PreCrop = {}))),
        (function (e) {
          (e.Body = t.id("RetryDialog-Body")), (e.Countdown = t.id("RetryDialog-Countdown")), (e.Dialog = t.id("RetryDialog-Dialog")), (e.RetryNowButton = t.id("RetryDialog-RetryNowButton"));
        })((d = t.RetryDialog || (t.RetryDialog = {}))),
        (function (e) {
          (e.ImageList = t.id("Sidebar-ImageList")),
            (e.download = t.c("Sidebar-download")),
            (e.edit_icon = t.c("Sidebar-edit_icon")),
            (e.filename = t.c("Sidebar-filename")),
            (e.image = t.c("Sidebar-image")),
            (e.main_row = t.c("Sidebar-main_row")),
            (e.mode = t.c("Sidebar-mode")),
            (e.mode_icon = t.c("Sidebar-mode_icon")),
            (e.mode_label = t.c("Sidebar-mode_label")),
            (e.mode_row = t.c("Sidebar-mode_row")),
            (e.polish = t.c("Sidebar-polish")),
            (e.remove = t.c("Sidebar-remove")),
            (e.rest = t.c("Sidebar-rest")),
            (e.slider = t.c("Sidebar-slider")),
            (e.slider_label = t.c("Sidebar-slider_label")),
            (e.smooth = t.c("Sidebar-smooth")),
            (e.thumbnail = t.c("Sidebar-thumbnail")),
            (e.title = t.c("Sidebar-title"));
        })((p = t.Sidebar || (t.Sidebar = {}))),
        (function (e) {
          (e.Dialog = t.id("Signon-Dialog")), (e.Header = t.id("Signon-Header")), (e.IframeContainer = t.id("Signon-IframeContainer")), (e.LoadingIndicator = t.id("Signon-LoadingIndicator")), (e.preload = t.c("Signon-preload")), (e.trigger = t.c("Signon-trigger"));
        })((m = t.Signon || (t.Signon = {}))),
        (function (e) {
          (e.details_container = t.c("Totals-details_container")),
            (e.image_count = t.c("Totals-image_count")),
            (e.original_size = t.c("Totals-original_size")),
            (e.outer_container = t.c("Totals-outer_container")),
            (e.progress = t.c("Totals-progress")),
            (e.reduction = t.c("Totals-reduction")),
            (e.reduction_container = t.c("Totals-reduction_container")),
            (e.result_size = t.c("Totals-result_size")),
            (e.result_size_container = t.c("Totals-result_size_container")),
            (e.save_all_btn = t.c("Totals-save_all_btn")),
            (e.save_all_icon = t.c("Totals-save_all_icon")),
            (e.save_all_spinner = t.c("Totals-save_all_spinner")),
            (e.unit = t.c("Totals-unit"));
        })((f = t.Totals || (t.Totals = {}))),
        (function (e) {
          (e.Canvas = t.id("Viewer-Canvas")),
            (e.CanvasContainer = t.id("Viewer-CanvasContainer")),
            (e.CurrentImageDecrement = t.id("Viewer-CurrentImageDecrement")),
            (e.CurrentImageDetails = t.id("Viewer-CurrentImageDetails")),
            (e.CurrentImageIncrement = t.id("Viewer-CurrentImageIncrement")),
            (e.DownloadCurrent = t.id("Viewer-DownloadCurrent")),
            (e.DownloadCurrentIcon = t.id("Viewer-DownloadCurrentIcon")),
            (e.DownloadCurrentSpinner = t.id("Viewer-DownloadCurrentSpinner")),
            (e.ImageControlGroup = t.id("Viewer-ImageControlGroup")),
            (e.ImageName = t.id("Viewer-ImageName")),
            (e.LoadingIndicator = t.id("Viewer-LoadingIndicator")),
            (e.LoadingIndicatorOver = t.id("Viewer-LoadingIndicatorOver")),
            (e.LoadingIndicatorOverShade = t.id("Viewer-LoadingIndicatorOverShade")),
            (e.NextImage = t.id("Viewer-NextImage")),
            (e.PrevImage = t.id("Viewer-PrevImage")),
            (e.ViewCompressedButton = t.id("Viewer-ViewCompressedButton")),
            (e.ViewDifferenceButton = t.id("Viewer-ViewDifferenceButton")),
            (e.ViewOriginalButton = t.id("Viewer-ViewOriginalButton")),
            (e.backdrop = t.c("Viewer-backdrop")),
            (e.blue_button = t.c("Viewer-blue_button")),
            (e.cancel_button = t.c("Viewer-cancel_button")),
            (e.clear_button = t.c("Viewer-clear_button")),
            (e.container = t.c("Viewer-container")),
            (e.highlight = t.c("Viewer-highlight")),
            (e.layer_button = t.c("Viewer-layer_button")),
            (e.pane_control_button = t.c("Viewer-pane_control_button")),
            (e.toolbar = t.c("Viewer-toolbar")),
            (e.underline_button = t.c("Viewer-underline_button")),
            (e.zoom_1_to_1_button = t.c("Viewer-zoom_1_to_1_button")),
            (e.zoom_in_button = t.c("Viewer-zoom_in_button")),
            (e.zoom_out_button = t.c("Viewer-zoom_out_button")),
            (e.zoom_to_fit_button = t.c("Viewer-zoom_to_fit_button"));
        })((g = t.Viewer || (t.Viewer = {}))),
        (function (e) {
          (e.AcceptTerms = t.id("merchant-AcceptTerms")),
            (e.AcceptTermsWrapper = t.id("merchant-AcceptTermsWrapper")),
            (e.BraintreeDropinContainer = t.id("merchant-BraintreeDropinContainer")),
            (e.CantPaypal = t.id("merchant-CantPaypal")),
            (e.Cents = t.id("merchant-Cents")),
            (e.CreditCardProcessorForm = t.id("merchant-CreditCardProcessorForm")),
            (e.DefaultPaymentMethod = t.id("merchant-DefaultPaymentMethod")),
            (e.FailedToLoadPaymentBackendJs = t.id("merchant-FailedToLoadPaymentBackendJs")),
            (e.InitializingIndicator = t.id("merchant-InitializingIndicator")),
            (e.PaymentError = t.id("merchant-PaymentError")),
            (e.PaymentForm = t.id("merchant-PaymentForm")),
            (e.PaymentMethodForm = t.id("merchant-PaymentMethodForm")),
            (e.PaymentMethodFormSubmit = t.id("merchant-PaymentMethodFormSubmit")),
            (e.RadioBraintree = t.id("paymentMethod_braintree")),
            (e.RadioPaypal = t.id("paymentMethod_paypal")),
            (e.RadioStripe = t.id("paymentMethod_stripe")),
            (e.ShowWhenCreatingPm = t.id("merchant-ShowWhenCreatingPm")),
            (e.ShowWhenMinibrowsing = t.id("merchant-ShowWhenMinibrowsing")),
            (e.ShowWhenSubmitting = t.id("merchant-ShowWhenSubmitting")),
            (e.StreamlexPaymentToken = t.id("merchant-StreamlexPaymentToken")),
            (e.StripeCardElement = t.id("merchant-StripeCardElement")),
            (e.StripeCardErrors = t.id("merchant-StripeCardErrors")),
            (e.StripeNameElement = t.id("merchant-StripeNameElement")),
            (e.StripeNameErrors = t.id("merchant-StripeNameErrors")),
            (e.StripePaymentError = t.id("merchant-StripePaymentError")),
            (e.SubmitSection = t.id("merchant-SubmitSection")),
            (e.TaxLocationPostalCode = t.id("merchant-TaxLocationPostalCode")),
            (e.TaxPostalCode = t.id("merchant-TaxPostalCode")),
            (e.TaxPostalCodeFormGroup = t.id("merchant-TaxPostalCodeFormGroup")),
            (e.TaxSection = t.id("merchant-TaxSection")),
            (e.has_error = t.c("has-error")),
            (e.radio_paymentMethod = t.c("radio_paymentMethod"));
        })((w = t.merchant || (t.merchant = {})));
    })(a || (a = {})),
    (function (t) {
      const e = a.Signon.Dialog.anscestorOf(new r("modal-header")),
        i = "message.signup",
        n = [];
      let s = null;
      function o(t) {
        const e = t.originalEvent,
          i = (function (t) {
            for (let e of n) if (e.contentWindow == t) return e;
            return null;
          })(e.source);
        if (i) {
          let t = parseInt(e.data);
          t > 10 && (i.height = t + "px"), i.hasLoaded || ((i.hasLoaded = !0), l());
        }
      }
      function h() {
        c($(this));
      }
      function c(t) {
        const e = t.data("url");
        if (null == s || s.src != e) {
          (s =
            (function (t) {
              for (let e of n) if (e.src == t) return e;
              return null;
            })(e) ||
            (function (t) {
              let e = document.createElement("iframe");
              return (
                e.setAttribute("seamless", "seamless"),
                (e.frameBorder = "0"),
                (e.width = "100%"),
                (e.height = "650px"),
                (e.style.backgroundColor = "#fff"),
                (e.hasLoaded = !1),
                (e.onload = function (t) {
                  (e.hasLoaded = !0), l();
                }),
                (e.src = t),
                n.push(e),
                a.Signon.IframeContainer.$().prepend(e),
                e
              );
            })(e)),
            (s.style.display = "block");
          for (let t of n) t != s && (t.style.display = "none");
        }
        l();
      }
      function l() {
        a.Signon.LoadingIndicator.$().toggle(!(s && s.hasLoaded));
      }
      function u() {
        const t = $(this);
        c(t), a.$window.on(i, o);
        const r = t.data("header");
        return r ? (a.Signon.Header.$().text(r).show(), e.$().css("border-bottom", "")) : (a.Signon.Header.$().hide(), e.$().css("border-bottom", "none")), a.Signon.Dialog.$().modal(), !1;
      }
      t.checkInit = function () {
        a.Signon.Dialog.$().length > 0 &&
          a.Signon.trigger.$().length > 0 &&
          (a.Signon.Dialog.$().on("hide.bs.modal", function () {
            a.$window.off(i);
          }),
          a.Signon.trigger.elements().forEach((t) => {
            t.addEventListener("touchstart", h, { passive: !0 }), t.addEventListener("mouseover", h, { passive: !0 });
          }),
          a.Signon.trigger.$().click(u),
          a.Signon.preload.$().each(h));
      };
    })(h || (h = {})),
    (function (t) {
      function e(t, e) {
        return t[e];
      }
      (t.get = e),
        (t.getOrElse = function (t, i, r) {
          var n = e(t, i);
          return void 0 === n ? r : n;
        }),
        (t.set = function (t, e, i) {
          return (t[e] = i);
        }),
        (t.cast = function (t) {
          return t;
        });
    })(c || (c = {})),
    (function (t) {
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = [],
        r = new Uint8Array(256);
      for (var n = 0; n < 64; n++) (i[n] = e.charAt(n)), (r[e.charCodeAt(n)] = n);
      function s(t, e) {
        return r[0 | t.charCodeAt(e)];
      }
      function o(t) {
        return i[63 & t];
      }
      (r["-".charCodeAt(0)] = 62),
        (r["_".charCodeAt(0)] = 63),
        (t.decode = function (t) {
          if (t.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4. ");
          var e,
            i,
            r = t.length,
            n = "=" === t.charAt(r - 2) ? 2 : "=" === t.charAt(r - 1) ? 1 : 0,
            o = new Uint8Array((3 * t.length) / 4 - n),
            a = n > 0 ? t.length - 4 : t.length,
            h = 0;
          function c(t) {
            o[h++] = 255 & t;
          }
          for (e = 0; e < a; e += 4) c((i = (s(t, e) << 18) | (s(t, e + 1) << 12) | (s(t, e + 2) << 6) | s(t, e + 3)) >> 16), c(i >> 8), c(i);
          return 2 === n ? c((i = (s(t, e) << 2) | (s(t, e + 1) >> 4))) : 1 === n && (c((i = (s(t, e) << 10) | (s(t, e + 1) << 4) | (s(t, e + 2) >> 2)) >> 8), c(i)), o;
        }),
        (t.decodeString = function (t, e) {
          try {
            return atob(t);
          } catch (t) {}
          return e;
        }),
        (t.encode = function (t, e) {
          if (t instanceof Uint8Array) {
            const s = (e = e || t.length) % 3;
            var i,
              r = "";
            const a = e - s;
            for (var n = 0; n < a; n += 3) (r += o((i = (t[n] << 16) + (t[n + 1] << 8) + t[n + 2]) >> 18)), (r += o(i >> 12)), (r += o(i >> 6)), (r += o(i));
            return 1 == s ? ((r += o((i = t[a]) >> 2)), (r += o(i << 4)), (r += "==")) : 2 == s && ((r += o((i = (t[a] << 8) + t[a + 1]) >> 10)), (r += o(i >> 4)), (r += o(i << 2)), (r += "=")), r.replace(/\!/, "!");
          }
          return btoa(c.cast(t));
        });
    })(l || (l = {})),
    (function (t) {
      const e = [0];
      function i(t, e) {
        return t.toFixed(e).replace(/\.?0+$/, "");
      }
      function r(t, e) {
        "use strict";
        if (null == t) throw new TypeError("can't convert " + t + " to object");
        if (((e = +e) != e && (e = 0), e < 0)) throw new RangeError("repeat count must be non-negative");
        if (e == 1 / 0) throw new RangeError("repeat count must be less than infinity");
        if (((e = Math.floor(e)), 0 == t.length || 0 == e)) return "";
        if (t.length * e >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
        for (var i = "", r = 0; r < e; r++) i += t;
        return i;
      }
      function n(t) {
        if (!t) return null;
        const e = t.match(/data:(.*?)(;base64)?,(.*)/);
        if (!e) return null;
        const i = e[1] || "text/plain",
          r = !!e[2],
          n = decodeURIComponent(e[3].trim());
        if (r) {
          const t = l.decode(n);
          let e = new Blob([t], { type: i });
          return e.size != t.length && (e = new Blob([t.buffer], { type: i })), e;
        }
        return new Blob([n], { type: i });
      }
      function s(t, e, i) {
        return new File([t], e, { type: t.type, lastModified: i || Date.now() });
      }
      function o(t) {
        switch (t) {
          case "image/jpeg":
            return "jpg";
          case "image/png":
            return "png";
          case "image/gif":
            return "gif";
          case "image/svg+xml":
            return "svg";
          default:
            return;
        }
      }
      function a(t) {
        let e = t.lastIndexOf(".");
        return e >= 0 ? { base: t.substr(0, e), extension: t.substr(e + 1) } : { base: t, extension: "" };
      }
      (t.tic = function () {
        e.push(Date.now());
      }),
        (t.toc = function (t) {
          Date.now(), e.pop();
        }),
        (t.toFixed = i),
        (t.formatAspectRatio = function (t) {
          return i(t.w, 3) + ":" + i(t.h, 3);
        }),
        (t.hex = function (t, e) {
          return ("000000000" + t.toString(16)).substr(-e);
        }),
        (t.fuzzyAspectRatioEx = function (t, e) {
          for (var i = t.w / t.h, r = 0; r < e.length; r++) {
            var n = e[r],
              s = n.w / n.h;
            if (Math.abs((i - s) / s) < 0.01) return n;
          }
          return t.w > t.h ? { w: t.w / t.h, h: 1 } : { w: 1, h: t.h / t.w };
        }),
        (t.roundTo = function (t, e) {
          return parseFloat(t.toFixed(e));
        }),
        (t.empty = function () {}),
        (t.sign = function (t) {
          return 0 == t ? 0 : t > 0 ? 1 : -1;
        }),
        (t.clamp = function (t, e, i) {
          return Math.max(e, Math.min(t, i));
        }),
        (t.log10 = function (t) {
          return Math.log(t) / Math.LN10;
        }),
        (t.parseIntWithAlt = function (t, e, i) {
          const r = parseInt(t, e);
          return isNaN(r) ? i : r;
        }),
        (t.padStart = function (t, e, i) {
          return (e >>= 0), (i = String(void 0 !== i ? i : " ")), t.length > e ? String(t) : ((e -= t.length) > i.length && (i += r(i, e / i.length)), i.slice(0, e) + String(t));
        }),
        (t.repeat = r),
        (t.startsWith = function (t, e) {
          return 0 == t.lastIndexOf(e, 0);
        }),
        (t.endsWith = function (t, e) {
          return t.indexOf(e, t.length - e.length) >= 0;
        }),
        (t.blobToArrayBuffer = function (t, e, i) {
          var r = new FileReader();
          (r.onerror = r.onabort = i),
            (r.onloadend = function (t) {
              e(c.cast(r.result));
            }),
            r.readAsArrayBuffer(t);
        }),
        (t.blobToString = function (t, e, i) {
          var r = new FileReader();
          (r.onerror = r.onabort = i),
            (r.onloadend = function (t) {
              e(c.cast(r.result));
            }),
            r.readAsText(t);
        }),
        (t.dataUrlToBlob = n),
        (t.dataUrlToFile = function (t, e) {
          return s(n(t), e);
        }),
        (t.blobToFile = s),
        (t.mimeTypeToExtension = o),
        (t.changeFileTypeAndExtension = function (t, e) {
          if (t.type != e) {
            let i = t.name,
              r = o(e);
            if (r) {
              i = a(i).base + "." + r;
            }
            return new File([t], i, { type: e, lastModified: t.lastModified });
          }
          return t;
        }),
        (t.svgStringToDataUrl = function (t) {
          return "data:image/svg+xml;base64," + btoa(t);
        }),
        (t.toDataUrl = function (t, e) {
          return "data:" + e + ";base64," + l.encode(t);
        }),
        (t.min = function (t) {
          return Math.min.apply(null, t);
        }),
        (t.max = function (t) {
          return Math.max.apply(null, t);
        }),
        (t.minBy = function (t, e) {
          if (0 != t.length) {
            let i = 0,
              r = t[0],
              n = e(r);
            for (let s = 1; s < t.length; s++) {
              let o = t[s],
                a = e(o);
              a < n && ((r = o), (n = a), (i = s));
            }
            return { min: r, value: n, index: i };
          }
        }),
        (t.maxBy = function (t, e) {
          if (0 != t.length) {
            let i = 0,
              r = t[0],
              n = e(r);
            for (let s = 1; s < t.length; s++) {
              let o = t[s],
                a = e(o);
              a > n && ((r = o), (n = a), (i = s));
            }
            return { max: r, value: n, index: i };
          }
        }),
        (t.signedNumber = function (t) {
          return 0 == t ? "0" : t > 0 ? "+" + t : "" + t;
        }),
        (t.splitExtensionFromFilename = a),
        (t.dropExtension = function (t) {
          let e = t.lastIndexOf(".");
          return e >= 0 ? t.substr(0, e) : t;
        }),
        (t.getExtensionWithDot = function (t) {
          let e = t.lastIndexOf(".");
          return e >= 0 ? t.substr(e) : "";
        }),
        (t.getExtensionNoDot = function (t) {
          let e = t.lastIndexOf(".");
          return e >= 0 ? t.substr(e + 1) : "";
        }),
        (t.parsePx = function (t) {
          try {
            return parseInt(t);
          } catch (t) {
            return 0;
          }
        }),
        (t.colorBytesToRgbaCss = function (t) {
          return "rgba(" + t.join(",") + ")";
        }),
        (t.colorBytesToAbgr32 = function (t) {
          return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
        }),
        (t.colorBytesToRgba32 = function (t) {
          return (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3];
        }),
        (t.spliterate = function (t, e, i) {
          for (var r, n = 0; (r = t.indexOf(e, n)) >= 0; ) i(t.substring(n, r)), (n = r + e.length);
          n < t.length - 1 && i(t.substring(n, t.length));
        }),
        (t.stringify = function (t) {
          if (void 0 === t) return "undefined";
          if (null == t) return "null";
          if (t.hasOwnProperty("message")) return t.message || "[No message]";
          if ("string" == typeof t) return t;
          try {
            return JSON.stringify(t);
          } catch (e) {
            return t.toString();
          }
        }),
        (t.join16 = function (t, e) {
          return t.map((t) => (0 | t).toString(16)).join(e);
        }),
        (t.uint8ArrayToString = function (t) {
          for (var e = "", i = 0; i < t.byteLength; i++) e += String.fromCharCode(t[i]);
          return e;
        }),
        (t.randomInt = function (t) {
          return Math.floor(Math.random() * t);
        }),
        (t.randomInt2 = function (t, e) {
          return Math.floor(Math.random() * (e - t) + t);
        }),
        (t.centerElide = function (t, e) {
          if (t && t.length >= e) {
            let i = Math.floor((e - 4) / 2);
            return t.substring(0, i) + "..." + t.substring(t.length - i);
          }
          return t;
        }),
        (t.elide = function (t, e) {
          return t && t.length >= e ? t.substring(0, e - 3) + "..." : t;
        }),
        (t.sqr = function (t) {
          return t * t;
        }),
        (t.cube = function (t) {
          return t * t * t;
        }),
        (t.safeDiv = function (t, e, i = 0) {
          return 0 == e ? i : t / e;
        }),
        (t.find = function (t, e) {
          for (var i = 0; i < t.length; i++) if (e(t[i])) return t[i];
          return null;
        });
    })(O || (O = {})),
    (function (t) {
      function e(t) {
        return "undefined" == typeof csrfToken ? t : t + (t.indexOf("?") < 0 ? "?" : "&") + csrfToken.name + "=" + csrfToken.value;
      }
      (t.csrf = e),
        (t.ajax = function (t) {
          if ("undefined" != typeof csrfToken) {
            "GET" != (t.method || t.type || "GET").toUpperCase() && (t.url = e(t.url || ""));
          }
          return $.ajax(t);
        });
    })(u || (u = {})),
    (function (t) {
      const e = /(''|[^']|^){(\d+)(,number,[^}]*)?}/g,
        i = /(''|[^']|^){(\d+),plural,\s*(one\s*{([^}]*)})?\s*(few\s*{([^}]*)})?\s*other\s*{([^}]*)}\s*}/g;
      function r(t, e, i = void 0) {
        return `{${t},plural,one{${e}}other{${i || e + "s"}}}`;
      }
      let n;
      (t.pluralWithoutNumber = r),
        (t.plural = function (t, e, i = void 0) {
          return (
            (function (t) {
              return `{${t},number,integer}`;
            })(t) +
            " " +
            r(t, e, i)
          );
        }),
        (t.s = function (t, ...r) {
          if (0 == t.length) return "";
          const n = t;
          for (var s = t.length, o = 0; o < s && n.charCodeAt(o) <= 32; ) o++;
          for (; o < s && n.charCodeAt(s - 1) <= 32; ) s--;
          const a = 0 == o ? "" : n.substring(0, o);
          t = 0 == o && s == n.length ? n : n.substring(o, s);
          const h = s == n.length ? "" : n.substring(s, n.length);
          var c = window.I18nPhrases[t];
          return (
            void 0 === c &&
              (!(function (t, e) {
                if (((window.I18nPhrases[t] = t), !window.I18nPhrases.__translations_disabled__)) {
                  const r = { en: t, args: e };
                  u.ajax({ url: "/logMissingI18nPhrase", method: "POST", dataType: "json", contentType: "application/json; charset=UTF-8", data: JSON.stringify(r) });
                  const n = window.I18nPhrases || {};
                  for (var i in n) n.hasOwnProperty(i);
                }
              })(t, r),
              (c = t)),
            r.length > 0 &&
              (c = (c = c.replace(e, function (t, e, i, n) {
                "''" == e && (e = "'");
                let s = r[parseInt(i, 10)];
                return ",number,integer" == n && (s = p(s)), e + s;
              })).replace(i, function (t, e, i, n, s, o, a, h) {
                "''" == e && (e = "'");
                const c = r[parseInt(i, 10)];
                return (
                  e +
                  ((function (t, e, i) {
                    switch (GlobalsShared.locale.split("-")[0]) {
                      case "zh":
                      case "ja":
                      case "ko":
                      case "tr":
                      case "th":
                      case "id":
                        return;
                      case "ru":
                        return t % 10 == 1 && t % 100 != 11 ? e : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? i : void 0;
                      case "po":
                        return 1 == t ? e : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? i : void 0;
                      case "fr":
                      case "pt":
                        return t > 1 ? e : void 0;
                      default:
                        return 1 == t ? e : void 0;
                    }
                  })(parseInt(c), s, a) || h)
                );
              })),
            a && (c = a + c),
            h && (c += h),
            c
          );
        }),
        (t.commaList = function (t) {
          return t.join(", ");
        }),
        (function (t) {
          t.format = function (t) {
            return "$" + t.toFixed(2);
          };
        })(n || (n = {}));
      class s {
        constructor(t) {
          this.currency = t;
        }
        format(t) {
          return this.currency + t.toFixed(2);
        }
      }
      const o = {};
      function a(t, e, i = GlobalsShared.locale) {
        const r = i + "-" + t,
          a =
            o[r] ||
            (o[r] = (function (t, e) {
              try {
                return new Intl.NumberFormat(e, { style: "currency", currency: t });
              } catch (e) {
                return "USD" == t ? n : new s(t);
              }
            })(t, i));
        return a.format(e / 100);
      }
      let h;
      (t.dollars = function (t, e = GlobalsShared.locale) {
        return a("USD", t, e);
      }),
        (t.currencyAmount = a),
        (function (t) {
          t.format = function (t) {
            return (100 * t).toFixed(0) + "%";
          };
        })(h || (h = {}));
      const c = {};
      t.percent = function (t, e = GlobalsShared.locale) {
        return (
          c[e] ||
          (c[e] = (function (t) {
            try {
              return new Intl.NumberFormat(t, { style: "percent", minimumFractionDigits: 0 });
            } catch (t) {
              return h;
            }
          })(e))
        ).format(t / 100);
      };
      class l {
        constructor(t) {
          this.precision = t;
        }
        format(t) {
          return t.toFixed(this.precision);
        }
      }
      const d = {};
      function p(t, e = GlobalsShared.locale) {
        return t.toLocaleString(e);
      }
      (t.double = function (t, e = 2, i = GlobalsShared.locale) {
        const r = i + "-" + e;
        return (
          d[r] ||
          (d[r] = (function (t, e) {
            try {
              return new Intl.NumberFormat(e, { minimumFractionDigits: t, maximumFractionDigits: t });
            } catch (e) {
              return new l(t);
            }
          })(e, i))
        ).format(t);
      }),
        (t.int = p);
    })(d || (d = {}));
  class rt {
    constructor(t) {
      (this.data = new Uint8Array(t)), (this.offsetCount = 0);
    }
    length() {
      return this.data.length;
    }
    hasMore() {
      return this.offsetCount < this.data.length;
    }
    skip(t) {
      this.offsetCount += t;
    }
    nonEmpty() {
      return this.data.length > 0;
    }
    readInt8() {
      return this.data[this.offsetCount++];
    }
    readInt8s(t) {
      var e = this.data.slice(this.offsetCount, this.offsetCount + t);
      return (this.offsetCount += t), e;
    }
    readInt16() {
      return 256 * this.data[this.offsetCount++] + this.data[this.offsetCount++];
    }
    readInt24() {
      return 256 * this.data[this.offsetCount++] * 256 + 256 * this.data[this.offsetCount++] + this.data[this.offsetCount++];
    }
    readInt32() {
      return 256 * this.data[this.offsetCount++] * 256 * 256 + 256 * this.data[this.offsetCount++] * 256 + 256 * this.data[this.offsetCount++] + this.data[this.offsetCount++];
    }
    readSignedInt16() {
      var t = this.readInt16();
      return t >= 32768 && (t -= 65536), t;
    }
  }
  !(function (t) {
    const e = {
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubsecTime",
        37521: "SubsecTimeOriginal",
        37522: "SubsecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: "OECF",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRation",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        40965: "InteroperabilityIFDPointer",
        42016: "ImageUniqueID",
      },
      i = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright",
      },
      r = {
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential",
      },
      n = {
        ExposureProgram: { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" },
        MeteringMode: { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" },
        LightSource: {
          0: "Unknown",
          1: "Daylight",
          2: "Fluorescent",
          3: "Tungsten (incandescent light)",
          4: "Flash",
          9: "Fine weather",
          10: "Cloudy weather",
          11: "Shade",
          12: "Daylight fluorescent (D 5700 - 7100K)",
          13: "Day white fluorescent (N 4600 - 5400K)",
          14: "Cool white fluorescent (W 3900 - 4500K)",
          15: "White fluorescent (WW 3200 - 3700K)",
          17: "Standard light A",
          18: "Standard light B",
          19: "Standard light C",
          20: "D55",
          21: "D65",
          22: "D75",
          23: "D50",
          24: "ISO studio tungsten",
          255: "Other",
        },
        Flash: {
          0: "Flash did not fire",
          1: "Flash fired",
          5: "Strobe return light not detected",
          7: "Strobe return light detected",
          9: "Flash fired, compulsory flash mode",
          13: "Flash fired, compulsory flash mode, return light not detected",
          15: "Flash fired, compulsory flash mode, return light detected",
          16: "Flash did not fire, compulsory flash mode",
          24: "Flash did not fire, auto mode",
          25: "Flash fired, auto mode",
          29: "Flash fired, auto mode, return light not detected",
          31: "Flash fired, auto mode, return light detected",
          32: "No flash function",
          65: "Flash fired, red-eye reduction mode",
          69: "Flash fired, red-eye reduction mode, return light not detected",
          71: "Flash fired, red-eye reduction mode, return light detected",
          73: "Flash fired, compulsory flash mode, red-eye reduction mode",
          77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
          79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
          89: "Flash fired, auto mode, red-eye reduction mode",
          93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
          95: "Flash fired, auto mode, return light detected, red-eye reduction mode",
        },
        SensingMethod: { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" },
        SceneCaptureType: { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene" },
        SceneType: { 1: "Directly photographed" },
        CustomRendered: { 0: "Normal process", 1: "Custom process" },
        WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" },
        GainControl: { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" },
        Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" },
        Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" },
        Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" },
        SubjectDistanceRange: { 0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view" },
        FileSource: { 3: "DSC" },
        Components: { 0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" },
      };
    const s = { 120: "caption", 110: "credit", 25: "keywords", 55: "dateCreated", 80: "byline", 85: "bylineTitle", 122: "captionWriter", 105: "headline", 116: "copyright", 15: "category" };
    function o(t, e, i) {
      for (var r, n, o, a, h = new DataView(t), l = {}, u = e; u < e + i; ) 28 === h.getUint8(u) && 2 === h.getUint8(u + 1) && (a = h.getUint8(u + 2)) in s && ((o = h.getInt16(u + 3)) + 5, (n = s[a]), (r = c(h, u + 5, o)), l.hasOwnProperty(n) ? (l[n] instanceof Array ? l[n].push(r) : (l[n] = [l[n], r])) : (l[n] = r)), u++;
      return l;
    }
    function a(t, e, i, r, n) {
      var s,
        o,
        a = t.getUint16(i, !n),
        c = {};
      for (o = 0; o < a; o++) (s = i + 12 * o + 2), (c[r[t.getUint16(s, !n)]] = h(t, s, e, i, n));
      return c;
    }
    function h(t, e, i, r, n) {
      var s,
        o,
        a,
        h,
        l,
        u,
        d = t.getUint16(e + 2, !n),
        p = t.getUint32(e + 4, !n),
        m = t.getUint32(e + 8, !n) + i;
      switch (d) {
        case 1:
        case 7:
          if (1 == p) return t.getUint8(e + 8);
          for (s = p > 4 ? m : e + 8, o = [], h = 0; h < p; h++) o[h] = t.getUint8(s + h);
          return o;
        case 2:
          return c(t, (s = p > 4 ? m : e + 8), p - 1);
        case 3:
          if (1 == p) return t.getUint16(e + 8, !n);
          for (s = p > 2 ? m : e + 8, o = [], h = 0; h < p; h++) o[h] = t.getUint16(s + 2 * h, !n);
          return o;
        case 4:
          if (1 == p) return t.getUint32(e + 8, !n);
          for (o = [], h = 0; h < p; h++) o[h] = t.getUint32(m + 4 * h, !n);
          return o;
        case 5:
          if (1 == p) return (l = t.getUint32(m, !n)), (u = t.getUint32(m + 4, !n)), ((a = new Number(l / u)).numerator = l), (a.denominator = u), a;
          for (o = [], h = 0; h < p; h++) (l = t.getUint32(m + 8 * h, !n)), (u = t.getUint32(m + 4 + 8 * h, !n)), (o[h] = new Number(l / u)), (o[h].numerator = l), (o[h].denominator = u);
          return o;
        case 9:
          if (1 == p) return t.getInt32(e + 8, !n);
          for (o = [], h = 0; h < p; h++) o[h] = t.getInt32(m + 4 * h, !n);
          return o;
        case 10:
          if (1 == p) return t.getInt32(m, !n) / t.getInt32(m + 4, !n);
          for (o = [], h = 0; h < p; h++) o[h] = t.getInt32(m + 8 * h, !n) / t.getInt32(m + 4 + 8 * h, !n);
          return o;
      }
    }
    function c(t, e, i) {
      for (var r = "", n = e; n < e + i; n++) r += String.fromCharCode(t.getUint8(n));
      return r;
    }
    function l(t, s, o) {
      if ("Exif" != c(t, s, 4)) return !1;
      var h,
        l,
        u,
        d,
        p,
        m = s + 6;
      if (18761 == t.getUint16(m)) h = !1;
      else {
        if (19789 != t.getUint16(m)) return !1;
        h = !0;
      }
      if (42 != t.getUint16(m + 2, !h)) return !1;
      var f = t.getUint32(m + 4, !h);
      if (f < 8) return !1;
      if ((l = a(t, m, m + f, i, h)).ExifIFDPointer)
        for (u in (d = a(t, m, m + l.ExifIFDPointer, e, h))) {
          switch (u) {
            case "LightSource":
            case "Flash":
            case "MeteringMode":
            case "ExposureProgram":
            case "SensingMethod":
            case "SceneCaptureType":
            case "SceneType":
            case "CustomRendered":
            case "WhiteBalance":
            case "GainControl":
            case "Contrast":
            case "Saturation":
            case "Sharpness":
            case "SubjectDistanceRange":
            case "FileSource":
              d[u] = n[u][d[u]];
              break;
            case "ExifVersion":
            case "FlashpixVersion":
              d[u] = String.fromCharCode(d[u][0], d[u][1], d[u][2], d[u][3]);
              break;
            case "ComponentsConfiguration":
              d[u] = n.Components[d[u][0]] + n.Components[d[u][1]] + n.Components[d[u][2]] + n.Components[d[u][3]];
          }
          l[u] = d[u];
        }
      if (l.GPSInfoIFDPointer)
        for (u in (p = a(t, m, m + l.GPSInfoIFDPointer, r, h))) {
          if ("GPSVersionID" === u) p[u] = p[u][0] + "." + p[u][1] + "." + p[u][2] + "." + p[u][3];
          l[u] = p[u];
        }
      return l;
    }
    t.readFromBinaryFile = function (t) {
      const e = (function (t) {
          var e = new DataView(t);
          if (255 != e.getUint8(0) || 216 != e.getUint8(1)) return !1;
          for (
            var i = 2,
              r = t.byteLength,
              n = function (t, e) {
                return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) && 77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5);
              };
            i < r;

          ) {
            if (n(e, i)) {
              var s = e.getUint8(i + 7);
              return s % 2 != 0 && (s += 1), 0 === s && (s = 4), o(t, i + 8 + s, e.getUint16(i + 6 + s));
            }
            i++;
          }
        })(t),
        i = (function (t) {
          var e = new DataView(t);
          if (255 != e.getUint8(0) || 216 != e.getUint8(1)) return !1;
          for (var i = 2, r = t.byteLength; i < r; ) {
            if (255 != e.getUint8(i)) return !1;
            if (225 == e.getUint8(i + 1)) return l(e, i + 4, e.getUint16(i + 2));
            i += 2 + e.getUint16(i + 2);
          }
        })(t);
      return { iptc: e, exif: i };
    };
  })(p || (p = {})),
    (function (t) {
      (t[(t.Undefined = 0)] = "Undefined"), (t[(t.R0 = 1)] = "R0"), (t[(t.R90 = 2)] = "R90"), (t[(t.R180 = 3)] = "R180"), (t[(t.R270 = 4)] = "R270");
    })(m || (m = {})),
    (function (t) {
      (t[(t.Undefined = 0)] = "Undefined"), (t[(t.Uncalibrated = 1)] = "Uncalibrated"), (t[(t.sRgb = 2)] = "sRgb"), (t[(t.adobeRgb = 3)] = "adobeRgb");
    })(f || (f = {})),
    (function (t) {
      (t[(t.Success = 0)] = "Success"), (t[(t.ErrorFileReader = 1)] = "ErrorFileReader"), (t[(t.ErrorParse = 2)] = "ErrorParse"), (t[(t.ErrorException = 3)] = "ErrorException");
    })(g || (g = {})),
    (function (t) {
      (t[(t.Undefined = 0)] = "Undefined"), (t[(t.None = 1)] = "None"), (t[(t.Inch = 2)] = "Inch"), (t[(t.Centimeter = 3)] = "Centimeter"), (t[(t.Meter = 4)] = "Meter");
    })(w || (w = {}));
  class nt {
    constructor(t, e, i, r, n, s, o, a, h) {
      (this.statusCode = t), (this.width = e), (this.height = i), (this.orientation = r), (this.resolutionUnits = n), (this.resolutionX = s), (this.resolutionY = o), (this.colorSpace = a), (this.type = h), (this.wasRotated = !1);
    }
    applyOrientation() {
      if (this.orientation == m.R90 || this.orientation == m.R270) {
        let t = this.width;
        (this.width = this.height), (this.height = t);
      }
      this.wasRotated = !0;
    }
    checkFixType(t) {
      return this.type != t.type ? O.changeFileTypeAndExtension(t, this.type) : t;
    }
    getRawDpi() {
      let t = this.resolutionX.valueOf();
      if (t <= 0) return 72;
      switch (this.resolutionUnits) {
        case w.Inch:
          return t;
        case w.Centimeter:
          return 2.54 * t;
        case w.Meter:
          return (2.54 * t) / 100;
        default:
          return 72;
      }
    }
    dpi() {
      let t = this.getRawDpi(),
        e = Math.round(t),
        i = Math.abs(t - e);
      return 0 < i && i < 0.01 ? e : t;
    }
  }
  !(function (t) {
    const e = [137, 80, 78, 71, 13, 10, 26, 10],
      i = new Number(0);
    function r(t, e) {
      return new nt(t, 0, 0, m.Undefined, w.Undefined, 0, 0, f.Undefined, e);
    }
    function n(t, e) {
      try {
        let i = new rt(t),
          r = Math.min(12, i.length()),
          n = i.readInt8s(r),
          s = "";
        return (
          (s =
            r >= 8 && 137 === n[0] && 80 === n[1] && 78 === n[2] && 71 === n[3] && 13 === n[4] && 10 === n[5] && 26 === n[6] && 10 === n[7]
              ? "image/png"
              : r >= 2 && 255 === n[0] && 216 === n[1]
              ? "image/jpeg"
              : r >= 6 && 71 === n[0] && 73 === n[1] && 70 === n[2] && 56 === n[3] && (55 === n[4] || 57 === n[4]) && 97 === n[5]
              ? "image/gif"
              : r >= 2 && 66 === n[0] && 77 === n[1]
              ? "image/bmp"
              : r >= 12 && 82 === n[0] && 73 === n[1] && 70 === n[2] && 70 === n[3] && 87 === n[8] && 69 === n[9] && 66 === n[10] && 80 === n[11]
              ? "image/webp"
              : r >= 4 && ((73 === n[0] && 73 === n[1] && 42 === n[2] && 0 === n[3]) || (77 === n[0] && 77 === n[1] && 0 === n[2] && 42 === n[3]))
              ? "image/tiff"
              : r >= 4 && 0 === n[0] && 0 === n[1] && 1 === n[2] && 0 === n[3]
              ? "image/x-icon"
              : e || "application/octet-stream"),
          s
        );
      } catch (t) {
        return e;
      }
    }
    (t.inverseOrientation = function (t) {
      switch (t) {
        default:
        case m.Undefined:
          return m.Undefined;
        case m.R0:
          return m.R0;
        case m.R90:
          return m.R270;
        case m.R180:
          return m.R180;
        case m.R270:
          return m.R90;
      }
    }),
      (t.sniffType = function (t, e) {
        O.blobToArrayBuffer(
          t,
          function (i) {
            e(n(i, t.type));
          },
          function (i) {
            e(t.type);
          }
        );
      }),
      (t.sniffTypeBuf = n),
      (t.get = function (t, s) {
        O.blobToArrayBuffer(
          t,
          function (o) {
            let a = n(o, t.type);
            try {
              let t,
                n = new rt(o);
              switch (a) {
                case "image/png":
                  t = (function (t, i) {
                    for (let n = 0; n < e.length && t.hasMore(); n++) if (e[n] != t.readInt8()) return r(g.ErrorParse, i);
                    let n = 0,
                      s = 0,
                      o = 0,
                      a = 0,
                      h = w.Undefined,
                      c = f.Undefined,
                      l = m.Undefined;
                    for (; t.hasMore(); ) {
                      let e = t.readInt32(),
                        i = O.uint8ArrayToString(t.readInt8s(4));
                      if ("pHYs" == i) {
                        (n = t.readInt32()), (s = t.readInt32());
                        let e = t.readInt8();
                        h = 0 == e ? w.None : 1 == e ? w.Meter : w.Undefined;
                      } else if ("IHDR" == i) {
                        let i = t.offsetCount;
                        (o = t.readInt32()), (a = t.readInt32()), (t.offsetCount = i), t.readInt8s(e);
                      } else if ("iCCP" == i) {
                        let i = t.offsetCount,
                          r = "",
                          n = t.readInt8(),
                          s = 0;
                        for (; 0 != n && s < 79; ) (r += String.fromCharCode(n)), (n = t.readInt8()), s++;
                        t.readInt8s(e - (t.offsetCount - i));
                      } else t.readInt8s(e);
                      t.readInt32();
                    }
                    return new nt(g.Success, o, a, l, h, n, s, c, i);
                  })(n, a);
                  break;
                case "image/jpg":
                case "image/jpeg":
                  t = (function (t, e) {
                    let r = i,
                      n = i,
                      s = 0,
                      o = 0,
                      a = w.Undefined,
                      h = f.Undefined,
                      l = m.Undefined,
                      u = p.readFromBinaryFile(t.data.buffer);
                    if (u.exif) {
                      (r = c.getOrElse(u.exif, "XResolution", i)), (n = c.getOrElse(u.exif, "YResolution", i)), (s = c.getOrElse(u.exif, "ImageWidth", 0)), (o = c.getOrElse(u.exif, "ImageHeight", 0));
                      let t = c.getOrElse(u.exif, "ResolutionUnit", 0);
                      a = 3 == t ? w.Centimeter : 2 == t ? w.Inch : 1 == t ? w.None : w.Undefined;
                      let e = c.getOrElse(u.exif, "ColorSpace", 0);
                      h = 65535 == e ? f.Uncalibrated : 1 == e ? f.sRgb : f.Undefined;
                      let d = c.getOrElse(u.exif, "Orientation", 0);
                      l = 1 == d ? m.R0 : 3 == d ? m.R180 : 6 == d ? m.R90 : 8 == d ? m.R270 : m.Undefined;
                    }
                    return new nt(g.Success, s, o, l, a, r, n, h, e);
                  })(n, a);
                  break;
                case "image/gif":
                  t = (function (t, e) {
                    return r(g.ErrorParse, e);
                  })(0, a);
                  break;
                default:
                  t = r(g.ErrorParse, a);
              }
              s(t);
            } catch (t) {
              s(r(g.ErrorException, a));
            }
          },
          function (e) {
            s(r(g.ErrorFileReader, t.type));
          }
        );
      });
  })(v || (v = {}));
  class st {
    constructor(t, e) {
      (this.x = t), (this.y = e);
    }
    static empty() {
      return new st(0, 0);
    }
    static zero() {
      return new st(0, 0);
    }
    static nan() {
      return new st(Number.NaN, Number.NaN);
    }
    static from(t) {
      return new st(t.x, t.y);
    }
    toString() {
      return "(" + this.x + ", " + this.y + ")";
    }
    inFinite() {
      return this.isFinite();
    }
    isFinite() {
      return isFinite(this.x) && isFinite(this.y);
    }
    isNaN() {
      return isNaN(this.x) || isNaN(this.y);
    }
    interpolate(t, e) {
      return new st(this.x * (1 - e) + t.x * e, this.y * (1 - e) + t.y * e);
    }
    setInterpolated(t, e, i) {
      return this.setXy(t.x * (1 - i) + e.x * i, t.y * (1 - i) + e.y * i);
    }
    distanceSqrTo(t) {
      let e = this.x - t.x,
        i = this.y - t.y;
      return e * e + i * i;
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceSqrTo(t));
    }
    offset(t, e) {
      return new st(this.x + t, this.y + e);
    }
    set(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    setXy(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setNan() {
      return this.setXy(Number.NaN, Number.NaN);
    }
    round() {
      return new st(Math.round(this.x), Math.round(this.y));
    }
    floor() {
      return new st(Math.floor(this.x), Math.floor(this.y));
    }
    snap(t = 0.5, e = 0.5) {
      return new st(Math.floor(this.x) + t, Math.floor(this.y) + e);
    }
    rotateInPlace(t, e) {
      const i = Math.sin(t),
        r = Math.cos(t),
        n = this.x - e.x,
        s = this.y - e.y;
      return this.setXy(e.x + r * n - i * s, e.y + i * n + r * s), this;
    }
    rotateInto(t, e, i, r, n) {
      const s = this.x - i,
        o = this.y - r;
      n.setXy(i + t * s - e * o, r + e * s + t * o);
    }
    rotate(t, e) {
      const i = Math.sin(t),
        r = Math.cos(t),
        n = this.x - e.x,
        s = this.y - e.y;
      return new st(e.x + r * n - i * s, e.y + i * n + r * s);
    }
    plusEquals(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    plusEqualsXy(t, e) {
      return (this.x += t), (this.y += e), this;
    }
    plusEqualsScaled(t, e) {
      return (this.x += t * e.x), (this.y += t * e.y), this;
    }
    equals(t) {
      return t && this.x == t.x && this.y == t.y;
    }
    notEquals(t) {
      return !this.equals(t);
    }
    minusEquals(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    minusXyEquals(t, e) {
      return (this.x -= t), (this.y -= e), this;
    }
    minus(t) {
      return new st(this.x - t.x, this.y - t.y);
    }
    plus(t) {
      return new st(this.x + t.x, this.y + t.y);
    }
    times(t) {
      return new st(t * this.x, t * this.y);
    }
    timesEquals(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    ortho() {
      return new st(this.y, -this.x);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    lengthSqr() {
      return this.x * this.x + this.y * this.y;
    }
    normalize() {
      var t = this.length();
      return 0 != t && ((this.x /= t), (this.y /= t)), this;
    }
    capLength(t) {
      let e = this.length();
      return e > t && this.timesEquals(t / e), this;
    }
    dup() {
      return st.from(this);
    }
  }
  !(function (t) {
    (t[(t.TopLeft = 0)] = "TopLeft"), (t[(t.Top = 1)] = "Top"), (t[(t.TopRight = 2)] = "TopRight"), (t[(t.Right = 3)] = "Right"), (t[(t.BottomRight = 4)] = "BottomRight"), (t[(t.Bottom = 5)] = "Bottom"), (t[(t.BottomLeft = 6)] = "BottomLeft"), (t[(t.Left = 7)] = "Left"), (t[(t.Center = 8)] = "Center");
  })(b || (b = {})),
    (function (t) {
      (t.opposite = function (e) {
        switch (e) {
          case t.TopLeft:
            return t.BottomRight;
          case t.Top:
            return t.Bottom;
          case t.TopRight:
            return t.BottomLeft;
          case t.Right:
            return t.Left;
          case t.BottomRight:
            return t.TopLeft;
          case t.Bottom:
            return t.Top;
          case t.BottomLeft:
            return t.TopRight;
          case t.Left:
            return t.Right;
          case t.Center:
            return t.Center;
        }
        return t.Center;
      }),
        (t.flipX = function (e) {
          switch (e) {
            case t.TopLeft:
              return t.TopRight;
            case t.Top:
              return t.Top;
            case t.TopRight:
              return t.TopLeft;
            case t.Right:
              return t.Left;
            case t.BottomRight:
              return t.BottomLeft;
            case t.Bottom:
              return t.Bottom;
            case t.BottomLeft:
              return t.BottomRight;
            case t.Left:
              return t.Right;
            case t.Center:
              return t.Center;
          }
          return t.Center;
        }),
        (t.flipY = function (e) {
          switch (e) {
            case t.TopLeft:
              return t.BottomLeft;
            case t.Top:
              return t.Bottom;
            case t.TopRight:
              return t.BottomRight;
            case t.Right:
              return t.Right;
            case t.BottomRight:
              return t.TopRight;
            case t.Bottom:
              return t.Top;
            case t.BottomLeft:
              return t.TopLeft;
            case t.Left:
              return t.Left;
            case t.Center:
              return t.Center;
          }
          return t.Center;
        }),
        (t.interpolationCoefficientsFor = function (e) {
          switch (e) {
            case t.TopLeft:
              return { tx: 0, ty: 0 };
            case t.Top:
              return { tx: 0.5, ty: 0 };
            case t.TopRight:
              return { tx: 1, ty: 0 };
            case t.Right:
              return { tx: 1, ty: 0.5 };
            case t.BottomRight:
              return { tx: 1, ty: 1 };
            case t.Bottom:
              return { tx: 0.5, ty: 1 };
            case t.BottomLeft:
              return { tx: 0, ty: 1 };
            case t.Left:
              return { tx: 0, ty: 0.5 };
            case t.Center:
              return { tx: 0.5, ty: 0.5 };
          }
          return { tx: 0.5, ty: 0.5 };
        });
    })(b || (b = {}));
  class ot {
    constructor(t, e, i, r) {
      (this.p0 = t), (this.p1 = e), (this.p2 = i), (this.p3 = r), (this.points = []), this.points.push(t, e, i, r);
    }
    static empty() {
      return new ot(st.empty(), st.empty(), st.empty(), st.empty());
    }
    set(t) {
      return this.p0.set(t.p0), this.p1.set(t.p1), this.p2.set(t.p2), this.p3.set(t.p3), this;
    }
    dup() {
      return new ot(this.p0.dup(), this.p1.dup(), this.p2.dup(), this.p3.dup());
    }
    contains(t, e) {
      var i = !1;
      const r = this.points.length;
      for (var n = 0; n < r; n++) {
        var s = this.points[n],
          o = this.points[(n + 1) % r];
        ((o.y < e && s.y >= e) || (s.y < e && o.y >= e)) && o.x + ((e - o.y) / (s.y - o.y)) * (s.x - o.x) < t && (i = !i);
      }
      return i;
    }
    isConvex() {
      function t(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0;
      }
      var e = this.p1.minus(this.p0),
        i = this.p2.minus(this.p1),
        r = this.p3.minus(this.p2),
        n = this.p0.minus(this.p3),
        s = t(e.cross(i)),
        o = t(i.cross(r)),
        a = t(r.cross(n)),
        h = t(n.cross(e));
      return s == o && s == a && s == h;
    }
    rotateInPlace(t, e) {
      return this.p0.rotateInPlace(t, e), this.p1.rotateInPlace(t, e), this.p2.rotateInPlace(t, e), this.p3.rotateInPlace(t, e), this;
    }
    rotate(t, e) {
      return this.dup().rotateInPlace(t, e);
    }
  }
  class at {
    constructor(t, e, i, r) {
      (this.left = t), (this.top = e), (this.right = i), (this.bottom = r);
    }
    static zero() {
      return new at(0, 0, 0, 0);
    }
    static empty() {
      return new at(Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    }
    static unit() {
      return new at(0, 0, 1, 1);
    }
    static ofSize(t, e, i, r) {
      return new at(t, e, t + i, e + r);
    }
    static fromBoundingRect(t) {
      return new at(t[0], t[1], t[2], t[3]);
    }
    static fromCropRect(t) {
      return new at(t.left0, t.top0, t.right0, t.bottom0);
    }
    static fromPoints(t) {
      if (0 == t.length) return null;
      for (var e = t[0], i = new at(e.x, e.y, e.x, e.y), r = 1; r < t.length; r++) i.addPoint(t[r]);
      return i;
    }
    static fromQuad(t) {
      return at.fromPoints(t.points);
    }
    toString() {
      return "Rect(" + this.left + ", " + this.top + ", " + this.right + ", " + this.bottom + ")";
    }
    equals(t) {
      return this.left == t.left && this.top == t.top && this.right == t.right && this.bottom == t.bottom;
    }
    dup() {
      return new at(this.left, this.top, this.right, this.bottom);
    }
    setNull() {
      return this.set(null, null, null, null);
    }
    setFrom(t) {
      return (this.left = t.left), (this.top = t.top), (this.right = t.right), (this.bottom = t.bottom), this;
    }
    set(t, e, i, r) {
      return (this.left = t), (this.top = e), (this.right = i), (this.bottom = r), this;
    }
    scale(t) {
      return (this.left *= t), (this.top *= t), (this.right *= t), (this.bottom *= t), this;
    }
    fromCropRect(t) {
      return this.set(t.left0, t.top0, t.right0, t.bottom0);
    }
    containsPoint(t) {
      return this.left <= t.x && t.x <= this.right && this.top <= t.y && t.y <= this.bottom;
    }
    intersects(t) {
      return this.left < t.right && t.left < this.right && this.top < t.bottom && t.top < this.bottom;
    }
    intersectionWith(t) {
      return (this.left = Math.max(this.left, t.left)), (this.top = Math.max(this.top, t.top)), (this.right = Math.min(this.right, t.right)), (this.bottom = Math.min(this.bottom, t.bottom)), this;
    }
    leftCenter() {
      return new st(this.left, 0.5 * (this.top + this.bottom));
    }
    topLeft() {
      return new st(this.left, this.top);
    }
    topCenter() {
      return new st(0.5 * (this.left + this.right), this.top);
    }
    topRight() {
      return new st(this.right, this.top);
    }
    rightCenter() {
      return new st(this.right, 0.5 * (this.top + this.bottom));
    }
    bottomLeft() {
      return new st(this.left, this.bottom);
    }
    bottomCenter() {
      return new st(0.5 * (this.left + this.right), this.bottom);
    }
    bottomRight() {
      return new st(this.right, this.bottom);
    }
    center() {
      return new st(0.5 * (this.left + this.right), 0.5 * (this.top + this.bottom));
    }
    translate(t, e) {
      return (this.top += e), (this.bottom += e), (this.left += t), (this.right += t), this;
    }
    point(t) {
      switch (t) {
        case b.TopLeft:
          return this.interpolate(0, 0);
        case b.Top:
          return this.interpolate(0.5, 0);
        case b.TopRight:
          return this.interpolate(1, 0);
        case b.Right:
          return this.interpolate(1, 0.5);
        case b.BottomRight:
          return this.interpolate(1, 1);
        case b.Bottom:
          return this.interpolate(0.5, 1);
        case b.BottomLeft:
          return this.interpolate(0, 1);
        case b.Left:
          return this.interpolate(0, 0.5);
        case b.Center:
          return this.interpolate(0.5, 0.5);
      }
      return this.interpolate(0.5, 0.5);
    }
    setAnchorPoint(t, e) {
      switch (t) {
        case b.TopLeft:
          (this.left = e.x), (this.top = e.y);
          break;
        case b.Top:
          this.top = e.y;
          break;
        case b.TopRight:
          (this.top = e.y), (this.right = e.x);
          break;
        case b.Right:
          this.right = e.x;
          break;
        case b.BottomRight:
          (this.right = e.x), (this.bottom = e.y);
          break;
        case b.Bottom:
          this.bottom = e.y;
          break;
        case b.BottomLeft:
          (this.left = e.x), (this.bottom = e.y);
          break;
        case b.Left:
          this.left = e.x;
        case b.Center:
      }
      return this;
    }
    moveAnchorTo(t, e) {
      let i = this.point(t);
      return this.translate(e.x - i.x, e.y - i.y), this;
    }
    moveAnchor(t, e) {
      switch (t) {
        case b.TopLeft:
          (this.left = Math.min(this.left + e.x, this.right)), (this.top = Math.min(this.top + e.y, this.bottom));
          break;
        case b.Top:
          this.top = Math.min(this.top + e.y, this.bottom);
          break;
        case b.TopRight:
          (this.top = Math.min(this.top + e.y, this.bottom)), (this.right = Math.max(this.right + e.x, this.left));
          break;
        case b.Right:
          this.right = Math.max(this.right + e.x, this.left);
          break;
        case b.BottomRight:
          (this.right = Math.max(this.right + e.x, this.left)), (this.bottom = Math.max(this.bottom + e.y, this.top));
          break;
        case b.Bottom:
          this.bottom = Math.max(this.bottom + e.y, this.top);
          break;
        case b.BottomLeft:
          (this.left = Math.min(this.left + e.x, this.right)), (this.bottom = Math.max(this.bottom + e.y, this.top));
          break;
        case b.Left:
          this.left = Math.min(this.left + e.x, this.right);
          break;
        case b.Center:
          (this.left += e.x), (this.top += e.y), (this.right += e.x), (this.bottom += e.y);
      }
      return this;
    }
    moveAnchorToMinSize(t, e, i) {
      var r = Math.max(0, e - this.width()),
        n = Math.max(0, i - this.height());
      switch (t) {
        case b.TopLeft:
          (this.left -= r), (this.top -= n);
          break;
        case b.Top:
          this.top -= n;
          break;
        case b.TopRight:
          (this.top -= n), (this.right += r);
          break;
        case b.Right:
          this.right += r;
          break;
        case b.BottomRight:
          (this.right += r), (this.bottom += n);
          break;
        case b.Bottom:
          this.bottom += n;
          break;
        case b.BottomLeft:
          (this.left -= r), (this.bottom += n);
          break;
        case b.Left:
          this.left -= r;
          break;
        case b.Center:
          (r *= 0.5), (n *= 0.5), (this.left -= r), (this.right += r), (this.top -= n), (this.bottom += n);
      }
      return this;
    }
    forceAspectRatio(t, e) {
      const i = t * this.width();
      var r = 0,
        n = 0;
      e == b.TopLeft || e == b.TopRight || e == b.BottomRight || e == b.BottomLeft ? (i > this.height() ? (r = i - this.height()) : (n = this.height() / t - this.width())) : e == b.Top || e == b.Bottom ? (n = this.height() / t - this.width()) : (r = i - this.height());
      const s = 0.5 * n,
        o = 0.5 * r;
      switch (e) {
        case b.Top:
          (this.bottom += r), (this.left -= s), (this.right += s);
          break;
        case b.Left:
          (this.right += n), (this.top -= o), (this.bottom += o);
          break;
        case b.Bottom:
          (this.top -= r), (this.left -= s), (this.right += s);
          break;
        case b.Right:
          (this.left -= n), (this.top -= o), (this.bottom += o);
          break;
        case b.TopLeft:
          (this.bottom += r), (this.right += n);
          break;
        case b.TopRight:
          (this.bottom += r), (this.left -= n);
          break;
        case b.BottomRight:
          (this.top -= r), (this.left -= n);
          break;
        case b.BottomLeft:
          (this.top -= r), (this.right += n);
          break;
        case b.Center:
          (this.top -= o), (this.bottom += o), (this.left -= s), (this.right += s);
      }
      return this;
    }
    interpolate(t, e) {
      return new st(this.left * (1 - t) + t * this.right, this.top * (1 - e) + e * this.bottom);
    }
    transform(t, e) {
      return new st(e.left + ((t.x - this.left) / this.width()) * e.width(), e.top + ((t.y - this.top) / this.height()) * e.height());
    }
    sampleGrid(t, e) {
      for (var i = [], r = 0; r < e; r++) for (var n = r / (e - 1), s = 0; s < t; s++) i.push(this.interpolate(s / (t - 1), n));
      return i;
    }
    setHorizontal(t) {
      return (this.left = t.left), (this.right = t.right), this;
    }
    padToFit(t) {
      var e = 0,
        i = 0;
      return (e = Math.max(e, this.left - t.left)), (e = Math.max(e, t.right - this.right)), (i = Math.max(i, this.top - t.top)), (i = Math.max(i, t.bottom - this.bottom)), (this.left -= e), (this.right += e), (this.top = Math.min(this.top, t.top)), (this.bottom = Math.max(this.bottom, t.bottom)), this;
    }
    addRect(t) {
      return (this.left = Math.min(this.left, t.left)), (this.right = Math.max(this.right, t.right)), (this.top = Math.min(this.top, t.top)), (this.bottom = Math.max(this.bottom, t.bottom)), this;
    }
    addX(t) {
      (this.left = Math.min(this.left, t)), (this.right = Math.max(this.right, t));
    }
    addY(t) {
      (this.top = Math.min(this.top, t)), (this.bottom = Math.max(this.bottom, t));
    }
    addXy(t, e) {
      this.addX(t), this.addY(e);
    }
    addPoint(t) {
      this.addXy(t.x, t.y);
    }
    addPointSafe(t) {
      t && (null == this.left ? ((this.left = t.x), (this.top = t.y), (this.right = t.x), (this.bottom = t.y)) : this.addPoint(t));
    }
    width() {
      return this.right - this.left;
    }
    height() {
      return this.bottom - this.top;
    }
    area() {
      return this.width() * this.height();
    }
    aspectRatio() {
      return this.height() / this.width();
    }
    pad(t, e, i, r) {
      return null == e && (e = t), null == i && (i = t), null == r && (r = e), (this.left -= t), (this.top -= e), (this.right += i), (this.bottom += r), this;
    }
    padBottom(t) {
      return (this.bottom += t), this;
    }
    toQuad() {
      return new ot(this.topLeft(), this.topRight(), this.bottomRight(), this.bottomLeft());
    }
    snap() {
      return (this.left = Math.floor(this.left)), (this.top = Math.floor(this.top)), (this.right = Math.ceil(this.right)), (this.bottom = Math.ceil(this.bottom)), this;
    }
    round() {
      return (this.left = Math.round(this.left)), (this.top = Math.round(this.top)), (this.right = Math.round(this.right)), (this.bottom = Math.round(this.bottom)), this;
    }
    normalize() {
      var t = Math.min(this.left, this.right),
        e = Math.max(this.left, this.right),
        i = Math.min(this.top, this.bottom),
        r = Math.max(this.top, this.bottom);
      return (this.left = t), (this.right = e), (this.top = i), (this.bottom = r), this;
    }
  }
  !(function (t) {
    let e = !1,
      i = new Image();
    (i.src =
      "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAIAAwMBEQACEQEDEQH/xABRAAEAAAAAAAAAAAAAAAAAAAAKEAEBAQADAQEAAAAAAAAAAAAGBQQDCAkCBwEBAAAAAAAAAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AG8T9NfSMEVMhQvoP3fFiRZ+MTHDifa/95OFSZU5OzRzxkyejv8ciEfhSceSXGjS8eSdLnZc2HDm4M3BxcXwH/9k="),
      (i.onload = function () {
        e = 2 == i.width && 3 == i.height;
      }),
      (t.BrowserRotates = function () {
        return e;
      });
  })(y || (y = {})),
    (function (t) {
      t.RecodeJpegQuality = 0.95;
      const e = new Set(["image/png", "image/jpeg"]);
      function i(e, i, r, n) {
        v.get(e, function (s) {
          O.loadImageFromBlob(e, r, (e) => {
            if (s.statusCode != g.Success || s.orientation == m.R0 || s.orientation == m.Undefined || y.BrowserRotates()) {
              const r = t.imageToCanvasEx(e, i);
              (r.wasRotated = !1), n(r, s);
            } else {
              const r = t.rotateImageToCanvasEx(e, s.orientation, i);
              (r.wasRotated = !0), s.applyOrientation(), n(r, s);
            }
          });
        });
      }
      function r(t, e) {
        const i = t.naturalWidth,
          r = t.naturalHeight;
        let n = new ct(i, r);
        return (n.wasShrunk = !1), n.context().setGlobalAlpha(1), e && (n.context().setFillStyle("rgb(255,255,255)"), n.context().fillRect(0, 0, i, r)), n.context().context.drawImage(t, 0, 0, i, r), n;
      }
      function n(t) {
        return r(t, !0);
      }
      function s(t, e, i) {
        const r = t.naturalWidth,
          s = t.naturalHeight;
        let o = r,
          a = s,
          h = 0;
        switch (e) {
          case m.Undefined:
          case m.R0:
            return n(t);
          case m.R90:
            (o = s), (a = r), (h = 0.5 * Math.PI);
            break;
          case m.R180:
            h = Math.PI;
            break;
          case m.R270:
            (o = s), (a = r), (h = 0.5 * -Math.PI);
        }
        let c = new ct(o, a);
        return (c.wasShrunk = !1), c.context().setGlobalAlpha(1), i && (c.context().setFillStyle("rgb(255,255,255)"), c.context().fillRect(0, 0, o, a)), c.context().save(), c.context().translate(0.5 * o, 0.5 * a), c.context().rotate(h), c.context().context.drawImage(t, 0.5 * -r, 0.5 * -s, r, s), c.context().restore(), c;
      }
      (t.DefaultFontFamily = (function () {
        try {
          return window.getComputedStyle(document.querySelector("body")).fontFamily;
        } catch (t) {
          return "sans-serif";
        }
      })()),
        (t.needsReencoding = function (t) {
          return !e.has(t);
        }),
        (t.recodeCanvasFile = function (e, i) {
          return (
            (r = e.type),
            O.endsWith(r, "jpeg") || O.endsWith(r, "jpg") || O.endsWith(r, "webp") || O.endsWith(r, "jp2") || O.endsWith(r, "cr2") || O.endsWith(r, "nef") || O.endsWith(r, "dng") || O.endsWith(r, "jps") || O.startsWith(r, "image/heif") || O.startsWith(r, "image/avif")
              ? i.toFile("image/jpeg", t.RecodeJpegQuality, O.dropExtension(e.name) + ".jpeg")
              : i.toFile("image/png", 1, O.dropExtension(e.name) + ".png")
          );
          var r;
        }),
        (t.loadCheckRotateImage = i),
        (t.loadCheckRotateFlattenImage = function (t, e, r) {
          i(t, !0, e, r);
        }),
        (t.imageToCanvasEx = r),
        (t.flattenImage = n),
        (t.rotateImageToCanvasEx = s),
        (t.rotateAndFlattenImage = function (t, e) {
          return s(t, e, !0);
        });
    })(Z || (Z = {}));
  class ht {
    constructor(t, e) {
      (this.canvas = t), (this.context = e), this.toggleImageSmoothing(!1);
    }
    toggleImageSmoothing(t) {
      (this.context.mozImageSmoothingEnabled = t), (this.context.webkitImageSmoothingEnabled = t), (this.context.imageSmoothingEnabled = t);
    }
    width() {
      return this.context.canvas.width;
    }
    height() {
      return this.context.canvas.height;
    }
    logicalWidth() {
      return this.canvas.logicalWidth();
    }
    logicalHeight() {
      return this.canvas.logicalHeight();
    }
    createPattern(t, e) {
      return this.context.createPattern(t, e);
    }
    setStrokeStyle(t) {
      this.context.strokeStyle = t;
    }
    setLineDash(t) {
      this.context.setLineDash(t);
    }
    setLineWidth(t) {
      this.context.lineWidth = t;
    }
    setLineJoin(t) {
      this.context.lineJoin = t;
    }
    setLineCap(t) {
      this.context.lineCap = t;
    }
    strokeText(t, e, i) {
      this.context.strokeText(t, e, i);
    }
    fillText(t, e, i) {
      this.context.fillText(t, e, i);
    }
    measureText(t) {
      return this.context.measureText(t);
    }
    setFont(t) {
      this.context.font = t;
    }
    save() {
      this.context.save();
    }
    fill() {
      this.context.fill();
    }
    stroke() {
      this.context.stroke();
    }
    strokeRect(t, e, i, r) {
      this.context.strokeRect(t, e, i, r);
    }
    strokeCross(t, e, i, r) {
      let n = this.context;
      n.beginPath(), n.moveTo(t, e), n.lineTo(t + i, e + r), n.moveTo(t + i, e), n.lineTo(t, e + r), n.stroke();
    }
    createRadialGradient(t, e, i, r, n, s) {
      return this.context.createRadialGradient(t, e, i, r, n, s);
    }
    createLinearGradient(t, e, i, r) {
      return this.context.createLinearGradient(t, e, i, r);
    }
    scale(t, e) {
      this.context.scale(t, e);
    }
    translate(t, e) {
      this.context.translate(t, e);
    }
    setRectToRectTransform(t, e) {
      let i = e.width() / t.width(),
        r = e.height() / t.height();
      this.context.setTransform(i, 0, 0, r, e.left - t.left * i, e.top - t.top * r);
    }
    moveTo(t, e) {
      this.context.moveTo(t, e);
    }
    lineTo(t, e) {
      this.context.lineTo(t, e);
    }
    quadraticCurveTo(t, e, i, r) {
      this.context.quadraticCurveTo(t, e, i, r);
    }
    bezierCurveTo(t, e, i, r, n, s) {
      this.context.bezierCurveTo(t, e, i, r, n, s);
    }
    rotate(t) {
      this.context.rotate(t);
    }
    beginPath() {
      this.context.beginPath();
    }
    closePath() {
      this.context.closePath();
    }
    arc(t, e, i, r, n, s) {
      this.context.arc(t, e, i, r, n, s);
    }
    rect(t, e, i, r) {
      this.context.rect(t, e, i, r);
    }
    rectTo(t, e, i, r, n) {
      let s = t + i,
        o = e + r;
      this.moveTo(t, e), n ? (this.lineTo(s, e), this.lineTo(s, o), this.lineTo(t, o)) : (this.lineTo(t, o), this.lineTo(s, o), this.lineTo(s, e)), this.lineTo(t, e), this.closePath();
    }
    clip() {
      this.context.clip();
    }
    clipBlock(t, e, i, r, n, s) {
      t ? (this.save(), this.beginPath(), this.rect(e, i, r - e, n - i), this.clip(), s(), this.restore()) : s();
    }
    rotatedFrame(t, e, i) {
      0 != t ? (this.save(), this.translate(e.x, e.y), this.rotate(t), this.translate(-e.x, -e.y), i(), this.restore()) : i();
    }
    restore() {
      this.context.restore();
    }
    setFillStyle(t) {
      this.context.fillStyle = t;
    }
    clearShadow() {
      (this.context.shadowOffsetX = 0), (this.context.shadowOffsetY = 0), (this.context.shadowBlur = 0), (this.context.shadowColor = void 0);
    }
    setShadow(t, e, i, r) {
      (this.context.shadowOffsetX = t), (this.context.shadowOffsetY = e), (this.context.shadowBlur = i), (this.context.shadowColor = r);
    }
    setGlobalAlpha(t) {
      this.context.globalAlpha = t;
    }
    withGlobalAlpha(t, e) {
      let i = this.context.globalAlpha;
      this.setGlobalAlpha(t), e(), this.setGlobalAlpha(i);
    }
    clearRect(t, e, i, r) {
      this.context.clearRect(t, e, i, r);
    }
    clearAll() {
      this.clearRect(0, 0, this.logicalWidth(), this.logicalHeight());
    }
    createImageData(t, e) {
      return this.context.createImageData(t, e);
    }
    getImageData(t, e, i, r) {
      return this.context.getImageData(t, e, i, r);
    }
    getImageDataFull() {
      return this.context.getImageData(0, 0, this.width(), this.height());
    }
    putImageData(t, e, i) {
      this.context.putImageData(t, e, i);
    }
    putImageData2(t, e, i, r, n, s, o) {
      this.context.putImageData(t, e, i, r, n, s, o);
    }
    fillRect(t, e, i, r) {
      this.context.fillRect(t, e, i, r);
    }
    roundedRect(t, e, i, r, n) {
      i < 2 * n && (n = i / 2), r < 2 * n && (n = r / 2), this.beginPath(), this.moveTo(t + n, e), this.context.arcTo(t + i, e, t + i, e + r, n), this.context.arcTo(t + i, e + r, t, e + r, n), this.context.arcTo(t, e + r, t, e, n), this.context.arcTo(t, e, t + i, e, n), this.closePath();
    }
    fillRoundedRect(t, e, i, r, n) {
      this.roundedRect(t, e, i, r, n), this.context.fill();
    }
    drawImage(t, e, i) {
      this.context.drawImage(t, e, i);
    }
    drawImage2(t, e, i, r, n) {
      this.context.drawImage(t, e, i, r, n);
    }
    drawImage3(t, e, i, r, n, s, o, a, h) {
      this.context.drawImage(t, e, i, r, n, s, o, a, h);
    }
    drawCanvasEx(t, e, i) {
      this.context.drawImage(t.element, e, i);
    }
    drawCanvasEx2(t, e, i, r, n) {
      this.context.drawImage(t.element, e, i, r, n);
    }
    drawCanvasEx3(t, e, i, r, n, s, o, a, h) {
      this.context.drawImage(t.element, e, i, r, n, s, o, a, h);
    }
    circle(t, e, i) {
      this.context.beginPath(), this.context.arc(t, e, i, 0, 2 * Math.PI, !0);
    }
    fillCircle(t, e, i, r) {
      r && (this.context.fillStyle = r), this.circle(t, e, i), this.context.fill();
    }
    fillSquare(t, e, i, r) {
      r && (this.context.fillStyle = r), this.context.fillRect(t - i, e - i, 2 * i, 2 * i);
    }
    strokeSquare(t, e, i, r) {
      r && (this.context.strokeStyle = r), this.context.strokeRect(t - i, e - i, 2 * i, 2 * i);
    }
    strokeCircle(t, e, i, r) {
      r && (this.context.strokeStyle = r), this.circle(t, e, i), this.context.stroke();
    }
    strokeLine(t, e, i, r, n, s) {
      n && (this.context.lineWidth = n), s && (this.context.strokeStyle = s), this.context.beginPath(), this.context.moveTo(t, e), this.context.lineTo(i, r), this.context.stroke();
    }
    strokePolyline(...t) {
      if (t.length > 1) {
        this.context.beginPath(), this.context.moveTo(t[0].x, t[0].y);
        for (let e = 1; e < t.length; e++) this.context.lineTo(t[e].x, t[e].y);
        this.context.stroke();
      }
    }
    triangle(t, e, i, r, n, s) {
      var o = (120 * Math.PI) / 180;
      (n = n || r), (s = s || n), this.context.moveTo(t + r * Math.cos(i), e + r * Math.sin(i)), this.context.lineTo(t + n * Math.cos(i + o), e + n * Math.sin(i + o)), this.context.lineTo(t + s * Math.cos(i + 2 * o), e + s * Math.sin(i + 2 * o)), this.context.closePath();
    }
    strokeEx(t, e, i, r) {
      i && (this.context.lineJoin = i), r && (this.context.lineCap = r), (this.context.lineWidth = t), (this.context.strokeStyle = e), this.context.stroke();
    }
    fillEx(t) {
      (this.context.fillStyle = t), this.context.fill();
    }
    drawCenteredText(t, e, i = 18, r = !0) {
      var n = t;
      const s = t.length;
      this.setGlobalAlpha(1);
      let o = i;
      this.setFont(ct.defaultFontOfSize(o));
      var a = this.measureText(t).width;
      const h = this.canvas.logicalWidth();
      var c = h - 20;
      a > c && (this.setFont(this.canvas.smallFont), (o = 12), (a = this.measureText(t).width) > c && ((t = O.centerElide(n, 0.75 * s)), (a = this.measureText(t).width) > c && ((t = O.centerElide(n, 0.5 * s)), (a = this.measureText(t).width) > c && ((t = O.centerElide(n, 0.25 * s)), (a = this.measureText(t).width)))));
      let l = (h - a) / 2,
        u = o + 4,
        d = 0.25 * o + 1;
      r && (this.setGlobalAlpha(0.4), this.setFillStyle("#fff"), this.fillRoundedRect(l - 4, e - u + d, a + 8, u, 0.4 * u), this.setGlobalAlpha(1)), this.setFillStyle("#000"), this.fillText(t, l, e);
    }
  }
  class ct {
    static defaultFontOfSize(t) {
      return t + "px " + Z.DefaultFontFamily;
    }
    static fromHTMLImageElement(t, e = 1) {
      let i = t.naturalWidth * e,
        r = t.naturalHeight * e,
        n = new ct(i, r);
      return n.context().drawImage2(t, 0, 0, i, r), n;
    }
    constructor(t, e, i = 1) {
      (this.w = t), (this.h = e), (this.highDpiRatio = 1), (this.largeFont = "20px " + Z.DefaultFontFamily), (this.smallFont = "14px " + Z.DefaultFontFamily), (this.element = document.createElement("canvas")), (this.$element = $(this.element)), this.setSize(t, e, i), (this.wasShrunk = !1), (this.contextCache = null);
    }
    empty() {}
    width() {
      return this.w;
    }
    height() {
      return this.h;
    }
    snapStrokeCenterToDevice(t, e) {
      let i = t * this.highDpiRatio,
        r = e * this.highDpiRatio;
      return r == Math.round(r) ? (r % 2 == 0 ? Math.round(i) / this.highDpiRatio : (Math.floor(i) + 0.5) / this.highDpiRatio) : t;
    }
    logicalWidth() {
      return this.wLogical;
    }
    logicalHeight() {
      return this.hLogical;
    }
    boundsRect() {
      return new at(0, 0, this.width(), this.height());
    }
    logicalBoundsRect() {
      return at.ofSize(0, 0, this.logicalWidth(), this.logicalHeight());
    }
    size() {
      return this.w * this.h;
    }
    isInBounds(t, e) {
      return 0 <= t && t < this.width() && 0 <= e && e < this.height();
    }
    byteLength() {
      return 4 * this.size();
    }
    dup() {
      let t = new ct(this.width(), this.height());
      return t.context().drawCanvasEx(this, 0, 0), t;
    }
    crop(t, e, i, r) {
      let n = new ct(i, r);
      return n.context().drawCanvasEx(this, -t, -e), n;
    }
    isOpaque() {
      let t = this.context().getImageDataFull().data,
        e = t.length / 4;
      if (e > 0)
        for (let i = 0; i < e; i++) {
          if (t[4 * i + 3] < 255) return !1;
        }
      return !0;
    }
    removeAlpha() {
      let t = this.context().getImageDataFull(),
        e = t.data,
        i = e.length / 4;
      if (i > 0) for (let t = 0; t < i; t++) e[4 * t + 3] = 255;
      return this.context().putImageData(t, 0, 0), this;
    }
    hasTransparency() {
      return !this.isOpaque();
    }
    computeMeanRgba(t, e, i, r) {
      if (null != t && null != e && null != i && null != r) {
        let n = this.context().getImageData(t, e, i, r).data,
          s = n.length / 4;
        if (s > 0) {
          let t = new Float64Array(4);
          for (let e = 0, i = 0; e < s; e++) (t[0] += n[i++]), (t[1] += n[i++]), (t[2] += n[i++]), (t[3] += n[i++]);
          let e = new Uint8ClampedArray(4);
          return (e[0] = t[0] / s), (e[1] = t[1] / s), (e[2] = t[2] / s), (e[3] = t[3] / s), e;
        }
      }
    }
    computeAlphaWeightedMeanRgba(t, e, i, r) {
      if (null != t && null != e && null != i && null != r) {
        let n = this.context().getImageData(t, e, i, r).data,
          s = n.length / 4;
        if (s > 0) {
          let t = new Float64Array(4);
          for (let e = 0, i = 0; e < s; e++) {
            let e = n[i++],
              r = n[i++],
              s = n[i++],
              o = n[i++];
            (t[0] += e * o), (t[1] += r * o), (t[2] += s * o), (t[3] += o);
          }
          let e = new Uint8ClampedArray(4);
          return t[3] > 0 && ((e[0] = t[0] / t[3]), (e[1] = t[1] / t[3]), (e[2] = t[2] / t[3])), (e[3] = t[3] / s), e;
        }
      }
    }
    scale(t) {
      let e = new ct(Math.round(this.width() * t), Math.round(this.height() * t));
      return e.context().drawCanvasEx2(this, 0, 0, e.width(), e.height()), e;
    }
    context() {
      return null == this.contextCache && ((this.contextCache = new ht(this, this.element.getContext("2d"))), 1 != this.highDpiRatio && this.contextCache.scale(this.highDpiRatio, this.highDpiRatio)), this.contextCache;
    }
    checkSetSize(t, e, i = 1) {
      return (this.w != t || this.h != e || this.highDpiRatio != i) && (this.setSize(t, e, i), !0);
    }
    setSize(t, e, i = 1) {
      t > 0 && e > 0 && ((this.highDpiRatio = i), (this.wLogical = t), (this.hLogical = e), (this.w = t * this.highDpiRatio), (this.h = e * this.highDpiRatio), (this.element.style.width = t + "px"), (this.element.style.height = e + "px"), (this.element.width = this.w), (this.element.height = this.h), (this.contextCache = null));
    }
    clearAll() {
      this.context().clearRect(0, 0, this.width(), this.height());
    }
    toImage() {
      let t = document.createElement("img");
      return (t.src = this.toDataURL()), t;
    }
    toDataURL(t, e) {
      return this.element.toDataURL(t, e);
    }
    toBlob(t, e) {
      return O.dataUrlToBlob(this.toDataURL(t, e));
    }
    toBlobAsync(t, e, i) {
      this.element.toBlob(t);
    }
    toFile(t, e, i) {
      return O.blobToFile(this.toBlob(t, e), i);
    }
    fillAliasedCircle(t, e, i, r) {
      if (!(i <= 0)) {
        for (var n = this.context().getImageData(0, 0, this.width(), this.height()), s = i * i, o = Math.max(0, Math.floor(t - i)), a = Math.min(this.width() - 1, Math.ceil(t + i)), h = Math.max(0, Math.floor(e - i)), c = Math.min(this.height() - 1, Math.ceil(e + i)), l = h; l <= c; l++)
          for (var u = o; u <= a; u++)
            if ((u + 0.5 - t) * (u + 0.5 - t) + (l + 0.5 - e) * (l + 0.5 - e) <= s) {
              var d = 4 * (l * this.width() + u);
              (n.data[d] = r[0]), (n.data[d + 1] = r[1]), (n.data[d + 2] = r[2]), (n.data[d + 3] = r[3]);
            }
        this.context().putImageData(n, 0, 0);
      }
    }
  }
  !(function (t) {
    t.copyTextToClipboard = function (t, e, i) {
      window.navigator && window.navigator.clipboard && window.navigator.clipboard.writeText
        ? window.navigator.clipboard.writeText(t).then(
            () => {
              e();
            },
            () => {
              i();
            }
          )
        : i();
    };
    const e = new RegExp("mobile|ip(hone|od|ad)|android|blackberry|iemobile|kindle|netfront|silk-accelerated|(hpw|web)os|fennec|minimo|opera m(obi|ini)|blazer|dolfin|dolphin|skyfire|zune");
    function i(t, e, i) {
      navigator.clipboard && navigator.clipboard.write
        ? navigator.clipboard.write([new ClipboardItem({ [t.type]: t })]).then(
            () => {
              e();
            },
            (t) => {
              i();
            }
          )
        : setTimeout(i, 0);
    }
    (t.copyImageToClipboard = function (t, e, r) {
      ct.fromHTMLImageElement(t).toBlobAsync((t) => i(t, e, r));
    }),
      (t.copyImageBlobToClipboard = i),
      (t.isMobile = function () {
        return !!(navigator && navigator.userAgent && navigator.userAgent.length > 0) && e.test(navigator.userAgent.toLowerCase());
      });
    const r = /\<svg[^\>]+viewBox\s*=\s*"\s*([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)\s*"/,
      n = /\<svg[^\>]+width\s*=\s*"\s*([\d\.]+)/,
      s = /\<svg[^\>]+height\s*=\s*"\s*([\d\.]+)/;
    function o(t, e, i) {
      let r = new Image();
      (r.onload = function () {
        URL.revokeObjectURL(r.src), i(r);
      }),
        (r.onerror = e),
        (r.src = t);
    }
    (t.loadImageFromSvgString = function (e, i, a) {
      o(
        t.svgStringToDataUrl(
          (function (t) {
            let e = n.exec(t),
              i = s.exec(t);
            if (e && 2 == e.length && isFinite(parseInt(e[1])) && i && 2 == i.length && isFinite(parseInt(i[1]))) return t;
            {
              let e = r.exec(t);
              if (5 == e.length) {
                parseInt(e[1]), parseInt(e[2]);
                let i = parseInt(e[3]),
                  r = parseInt(e[4]);
                if (isFinite(i) && isFinite(r)) {
                  let e = 150,
                    n = Math.ceil((r / i) * e);
                  return t.replace("<svg", `<svg width="${e}" height="${n}"`);
                }
              }
            }
            return t;
          })(e)
        ),
        i,
        a
      );
    }),
      (t.loadImageFromDataUrl = o),
      (t.loadImageFromUrl = function (t, e, i) {
        let r = new Image();
        (r.onload = () => i(r)), (r.onerror = e), (r.src = t);
      }),
      (t.loadImageFromBlob = function (t, e, i) {
        o(URL.createObjectURL(t), e, i);
      }),
      (t.loadFileFromUrl = function (e, i, r) {
        let n = new XMLHttpRequest();
        n.open("GET", e, !0),
          (n.responseType = "blob"),
          (n.onload = function (n) {
            if (200 == this.status) {
              let n = this.response,
                s = e.split("/");
              i || (i = s[s.length - 1]), r(t.blobToFile(n, i));
            }
          }),
          n.send();
      }),
      (t.gaTrack = function (t, e, i, r) {
        "gtag" in window ? gtag("event", e, { event_category: t, event_label: i, value: r, non_interaction: !0 }) : ga("send", "event", t, e, i, r, { nonInteraction: !0 });
      }),
      (t.gaSetPageAndSendPageview = function (t) {
        ga("set", "page", t || location.pathname), ga("send", "pageview");
      }),
      (t.modal = function (t, e = !1, i = !1) {
        var r = "string" == typeof t ? $(t) : t.$();
        e ? r.modal({ backdrop: !i, keyboard: !0 }) : r.modal({ backdrop: "static", keyboard: !1 });
        var n = $(".modal-backdrop"),
          s = 1040 + 2 * (n.length - 1);
        n.last().css("z-index", s), r.css("z-index", s + 1);
      }),
      (t.blink = function (t, e = 200, i = 3) {
        var r = "string" == typeof t ? $(t) : t.$();
        function n() {
          r.fadeIn(e, s);
        }
        function s() {
          --i > 0 && r.fadeOut(e, n);
        }
        r.fadeOut(e, n);
      }),
      (t.makeElement = function (t, e) {
        var i = $(document.createElement(t));
        return i.text(e), i;
      }),
      (t.formatXhrError = function (e, i) {
        const r = e.responseURL || "[Unknown URL]";
        if ((t.gaTrack("XhrError", r, e.status + ", " + (i || "[unknown]")), 0 === e.status)) return d.s("Failed to connect to the server.") + "\n" + d.s("Please verify your network connection.") + "\n";
        {
          const r = t.elide((n = e.response) ? ("object" == typeof n ? JSON.stringify(n) : n.toString()) : "null", 200);
          return e.status < 200 || 299 < e.status
            ? e.statusText + " [" + e.status + "]\n" + r
            : "parsererror" === i
            ? d.s("Failed to parse JSON response.") + " [" + i + "]\n" + r
            : "timeout" === i
            ? d.s("Request time out.") + " [" + i + "]"
            : "abort" === i
            ? d.s("Request aborted by the server.") + " [" + i + "]"
            : "empty" === i
            ? d.s("Server gave an empty response.")
            : d.s("Unknown error.") + "\n" + r;
        }
        var n;
      });
  })(O || (O = {})),
    (function (t) {
      (t.attachToLink = function (t, e) {
        t.off("dragstart.DragUrl").on("dragstart.DragUrl", function (t) {
          const i = e();
          i && t.originalEvent.dataTransfer.setData("DownloadURL", i + ":" + this.href);
        });
      }),
        (t.attachDecorated = function () {
          $("a[data-dragurl]").on("dragstart", function (t) {
            const e = $(this).data("dragurl");
            e && t.originalEvent.dataTransfer.setData("DownloadURL", e);
          });
        });
    })(x || (x = {})),
    (function (t) {
      (t.isCommandOrCtrl = function (t) {
        return 17 == t || 224 == t || 91 == t || 93 == t;
      }),
        (t.isShift = function (t) {
          return 16 == t;
        });
    })(S || (S = {})),
    (function (t) {
      const e = ".FileDropper";
      var i,
        r = !0;
      let n, s;
      !(function (t) {
        (t[(t.Dropped = 0)] = "Dropped"), (t[(t.Picked = 1)] = "Picked"), (t[(t.Pasted = 2)] = "Pasted"), (t[(t.Url = 3)] = "Url");
      })((n = t.InputMethod || (t.InputMethod = {}))),
        (function (t) {
          (t[(t.NoBrowserSupport = 0)] = "NoBrowserSupport"), (t[(t.NonFileInput = 1)] = "NonFileInput"), (t[(t.NonImageInput = 2)] = "NonImageInput");
        })((s = t.ErrorCode || (t.ErrorCode = {}))),
        (t.initialize = function (t) {
          var o = !1,
            a = $.extend({}, { hover_class_on: t.monitor_drag, focusPasteOnCtrlV: !!t.monitor_paste, afterPaste: (t) => {} }, t);
          function h(t, e, i) {
            a.afterPaste(!1), a.error(t, e, i);
          }
          function c() {
            (r = !1), a.monitor_drag && a.hover_class_on && a.hover_class && a.monitor_drag.$().off(e), a.monitor_file_input && a.monitor_file_input.$().off(e), a.monitor_paste && a.monitor_paste.$().off(e), a.focusPasteOnCtrlV && $(window).off(e);
          }
          function l(t, e, i) {
            r &&
              (t && t.length > 0
                ? ("Pasted" == e && a.afterPaste(!0),
                  a.beforeDrop && a.beforeDrop(),
                  i == n.Dropped && a.hideDurationMs
                    ? setTimeout(() => {
                        a.drop.call(this, t, i), a.dropOnce && c();
                      }, a.hideDurationMs)
                    : (a.drop.call(this, t, i), a.dropOnce && c()))
                : h(d.s(e + " a non-file input"), i, s.NonFileInput));
          }
          function u(t, e) {
            clearTimeout(i), t.stopImmediatePropagation(), t.preventDefault();
            let r = !1;
            try {
              let e = t.originalEvent.dataTransfer;
              if (e) {
                let t = e.types;
                for (let e = 0; e < t.length; e++) {
                  if ("Files" == t[e]) {
                    r = !0;
                    break;
                  }
                }
              }
            } catch (t) {
              r = !0;
            }
            let n = a.hover_class_on.$().hasClass(a.hover_class.name()),
              s = e && r;
            return n && !s ? (a.beforeHide && a.beforeHide(), a.hideDurationMs ? setTimeout(() => a.hover_class_on.$().removeClass(a.hover_class.name()), a.hideDurationMs) : a.hover_class_on.$().removeClass(a.hover_class.name()), a.afterHide && a.afterHide()) : !n && s && (a.beforeShow && a.beforeShow(), a.hover_class_on.$().addClass(a.hover_class.name())), r;
          }
          function p() {
            a.pastedUrl ? h(d.s("Pasted something that wasn't an image or URL?"), n.Pasted, s.NonImageInput) : h(d.s("Pasted something that wasn't an image?"), n.Pasted, s.NonImageInput);
          }
          function m(t) {
            let e = new Blob([t], { type: t.type });
            return (
              (e.lastModified = t.lastModified),
              (e.name = (function () {
                function t(t) {
                  return ("0" + t).slice(-2);
                }
                let e = new Date();
                return "Pasted-" + e.getFullYear() + t(e.getMonth() + 1) + t(e.getDate()) + "-" + t(e.getHours()) + t(e.getMinutes()) + t(e.getSeconds());
              })()),
              e
            );
          }
          return (
            a.monitor_drag &&
              a.hover_class_on &&
              a.hover_class &&
              a.monitor_drag
                .$()
                .on("drop" + e, function (t) {
                  return u(t, !1) && l(t.originalEvent.dataTransfer.files, "Dropped", n.Dropped), !1;
                })
                .on("dragenter" + e, function (t) {
                  u(t, !0), a.onDragEnter && a.onDragEnter(t);
                })
                .on("dragover" + e, function (t) {
                  let e = u(t, !0);
                  (t.originalEvent.dataTransfer.dropEffect = r && e ? "copy" : "none"), a.onDragOver && a.onDragOver(t);
                })
                .on("dragleave" + e, function (t) {
                  i = setTimeout(() => {
                    u(t, !1), a.onDragLeave && a.onDragLeave(t);
                  }, 100);
                }),
            a.monitor_file_input &&
              a.monitor_file_input.$().on("change" + e, (t) => {
                let e = t.originalEvent.target;
                return l(e.files, "Picked", n.Picked), (e.value = null), !1;
              }),
            a.monitor_paste &&
              (a.monitor_paste.$().on("paste" + e, function (t) {
                if (!r) return;
                const e = t.originalEvent.clipboardData;
                if (e && e.files && e.files.length > 0) 1 == e.files.length && "image.png" == e.files[0].name ? l([m(e.files[0])], "Pasted", n.Pasted) : l(e.files, "Pasted", n.Pasted);
                else if (e && !e.items) h(d.s("Terribly sorry, it seems like your browser doesn't fully support pasting of images yet?") + "\n\n" + d.s("Paste should work in at least Chrome, Firefox, and Microsoft Edge. "), n.Pasted, s.NoBrowserSupport);
                else if (e && e.items && e.items.length > 0 && e.types && e.types.length == e.items.length) {
                  const t = [];
                  let i = !1,
                    r = 0;
                  for (let n = 0; n < e.items.length; n++)
                    if ("Files" == e.types[n]) {
                      let i = e.items[n].getAsFile();
                      i && ((t[r] = m(i)), r++);
                    } else
                      "text/plain" == e.types[n] &&
                        a.pastedUrl &&
                        ((i = !0),
                        e.items[n].getAsString(function (t) {
                          (t = t.trim()).length > 5e3 || t.length <= 4 || t.indexOf("\n") >= 0 || t.indexOf("\r") >= 0 || t.indexOf(" ") >= 0 || t.indexOf(".") < 0 ? p() : a.pastedUrl(t);
                        }));
                  r > 0 ? l(t, "Pasted", n.Pasted) : i || p();
                } else p();
                o && ((o = !1), a.monitor_paste.$().blur()), t.preventDefault();
              }),
              a.focusPasteOnCtrlV &&
                $(window).on("keydown" + e, (t) => {
                  (t.ctrlKey || t.metaKey) && 86 == t.keyCode && ($(document.activeElement).is("input") || (a.monitor_paste.$().focus(), (o = !0)));
                })),
            { disable: c }
          );
        });
      try {
        XMLHttpRequest.prototype.hasOwnProperty("sendAsBinary") ||
          c.set(XMLHttpRequest.prototype, "sendAsBinary", function (t) {
            var e = Array.prototype.map.call(t, function (t) {
                return 255 & t.charCodeAt(0);
              }),
              i = new Uint8Array(e);
            this.send(i.buffer);
          });
      } catch (t) {}
    })(C || (C = {})),
    (function (t) {
      var e = /%([0-9A-Fa-f]{2})/g,
        i = /[^\x20-\x7e\xa0-\xff]/g,
        r = /\\([\u0000-\u007f])/g,
        n = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g,
        s = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+\-\.^_`|~])+)$/,
        o = /^([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *(?:$|;)/;
      function a(t) {
        var r = s.exec(t);
        if (!r) throw new TypeError("invalid extended field value");
        var n,
          o = r[1].toLowerCase(),
          a = r[2].replace(e, h);
        switch (o) {
          case "iso-8859-1":
            n = String(a).replace(i, "?");
            break;
          case "utf-8":
            n = decodeURIComponent(escape(a));
            break;
          default:
            throw new TypeError("unsupported charset in extended field");
        }
        return n;
      }
      function h(t, e) {
        return String.fromCharCode(parseInt(e, 16));
      }
      t.parse = function (t) {
        if (t && "string" == typeof t) {
          var e = o.exec(t);
          if (e) {
            var i,
              s,
              h = e[0].length,
              c = (e[1].toLowerCase(), []),
              l = {};
            try {
              for (h = n.lastIndex = ";" === e[0].substr(-1) ? h - 1 : h; (e = n.exec(t)); ) {
                if (e.index !== h) throw new TypeError("invalid parameter format");
                if (((h += e[0].length), (i = e[1].toLowerCase()), (s = e[2]), -1 !== c.indexOf(i))) throw new TypeError("invalid duplicate parameter");
                c.push(i), i.indexOf("*") + 1 !== i.length ? "string" != typeof l[i] && ('"' === s[0] && (s = s.substr(1, s.length - 2).replace(r, "$1")), (l[i] = s)) : ((i = i.slice(0, -1)), (s = a(s)), (l[i] = s));
              }
              if (-1 !== h && h !== t.length) throw new TypeError("invalid parameter format");
            } catch (t) {}
            return l.filename;
          }
        }
      };
    })(T || (T = {})),
    (function (t) {
      const e = { url: "", progress: O.empty, error: O.empty, success: O.empty, withCredentials: !1, contentType: null };
      function i(t, e) {
        return O.blobToFile(t, e || "FetchedFromUrl_" + Date.now());
      }
      t.download = function (t) {
        let r = $.extend({}, e, t),
          n = O.dataUrlToBlob(r.url) || O.dataUrlToBlob(r.displayUrl);
        if (n)
          setTimeout(function () {
            r.success(i(n));
          }, 0);
        else {
          let t = new XMLHttpRequest(),
            e = 0;
          r.progress != O.empty &&
            (t.onprogress = (t) => {
              if (t.lengthComputable) {
                let i = Math.round((100 * t.loaded) / t.total);
                e !== i && ((e = i), r.progress(e));
              }
            }),
            (t.onerror = (e) => {
              r.error(O.formatXhrError(t, void 0));
            }),
            (t.onabort = (e) => {
              r.error(O.formatXhrError(t, "abort"));
            }),
            (t.withCredentials = !!r.withCredentials),
            (t.onload = (e) => {
              if (t.response)
                if (t.status < 200 || t.status > 299) {
                  let e = String.fromCharCode.apply(null, new Uint8Array(t.response));
                  r.error(d.s('Failed to fetch "{0}"', r.displayUrl || r.url) + "\n" + e);
                } else {
                  let e = r.contentType || t.getResponseHeader("Content-Type"),
                    n = T.parse(t.getResponseHeader("Content-Disposition")),
                    s = t.response,
                    o = i(new Blob([s], { type: e }), n);
                  r.success(o);
                }
            }),
            t.open("GET", r.url, !0),
            (t.responseType = "arraybuffer"),
            t.send();
        }
      };
    })(P || (P = {})),
    (function (t) {
      t.initialize = function (t, e) {
        t.$().click(function () {
          let t = prompt(d.s("Please enter the image URL to upload:"));
          return t && ((t = t.trim()), t.length > 4 && e(t)), !1;
        });
      };
    })(A || (A = {})),
    (function (t) {
      var e;
      (e = () => {
        window.addEventListener(
          "message",
          (t) => {
            if (t.data)
              if ("ping" == t.data) t.source.postMessage("pong", "*");
              else if ("pong" == t.data) for (let e = 0; e < a.length; e++) a[e].checkPong(t) && (a.splice(e, 1), e--);
              else if (t.data.file || t.data.blob) {
                let e = t.data.file || t.data.blob;
                i ? s(e) : r.push(e);
              }
          },
          !1
        );
      }),
        "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
      let i,
        r = [],
        n = !1;
      function s(t) {
        n && window.hasOwnProperty("chrome")
          ? t
              .arrayBuffer()
              .then((e) => {
                i(new File([e], t.name, { type: t.type, lastModified: t.lastModified }));
              })
              .catch((t) => {})
          : i(t);
      }
      t.setFileReceiver = function (t, e = !1) {
        (n = e),
          (i = t),
          setTimeout(() => {
            for (let t of r) s(t);
            r = [];
          }, 1);
      };
      class o {
        constructor(t, e) {
          (this.connected = !1),
            (this.onOpens = []),
            (this.targetWindow = window.open(t, e)),
            this.targetWindow.postMessage("ping", "*"),
            (this.pingIntervalId = setInterval(() => {
              this.targetWindow.postMessage("ping", "*");
            }, 30));
        }
        onOpen(t) {
          return this.connected ? t() : this.onOpens.push(t), this;
        }
        checkPong(t) {
          if (t.source == this.targetWindow) {
            clearInterval(this.pingIntervalId), (this.connected = !0);
            for (let t of this.onOpens) t();
            return (this.onOpens = []), !0;
          }
          return !1;
        }
      }
      let a = [],
        h = {};
      function c(t, e, i, r) {
        let n = e ? h[e] : null;
        (n && !n.targetWindow.closed) ||
          (n = (function (t, e) {
            let i = new o(t, e);
            return a.push(i), e && (h[e] = i), i;
          })(t, e)),
          n.onOpen(function () {
            setTimeout(() => {
              (r ? n.targetWindow : window).focus(), n.targetWindow.postMessage({ file: i }, "*");
            }, 1);
          });
      }
      (t.sendFile = c),
        (t.sendFileToRecompressor = function (t, e) {
          c("https://recompressor.com", "recompressor", t, e);
        }),
        (t.sendFileToVectorMagic = function (t, e) {
          c("https://vectormagic.com", null, t, e);
        }),
        (t.sendFileToVectorizer = function (t, e) {
          c("https://vectorizer.ai", null, t, e);
        }),
        (t.sendFileToPixianFaceSticker = function (t, e) {
          c("https://pixian.ai/face-stickers", "pixian-face-stickers", t, e);
        }),
        (t.sendFileToPixianBg = function (t, e) {
          c("https://pixian.ai", "pixian", t, e);
        }),
        (t.sendFileToClippingMagic = function (t, e) {
          c("https://clippingmagic.com", null, t, e);
        }),
        (t.sendFileToPixspy = function (t, e) {
          c("https://pixspy.com", "pixspy", t, e);
        });
    })(k || (k = {})),
    (function (t) {
      (t[(t.fill_shapes = 0)] = "fill_shapes"), (t[(t.stroke_shapes = 1)] = "stroke_shapes"), (t[(t.stroke_edges = 2)] = "stroke_edges");
    })(M || (M = {})),
    (function (t) {
      (t.MaxTries = 1),
        (t.BytesPerChunk = 14848),
        (t.NumPuntsWhenWorkersBusy = 3),
        (t.MaxBytesPerImage = 31457280),
        (t.MaxMaxNumPixels = 3145828),
        (t.MaxMaxNumMegapixels = 3),
        (t.BrowserChromeUrl = "https://www.google.com/chrome/"),
        (t.BrowserFirefoxUrl = "https://www.mozilla.org/en-US/firefox/new/"),
        (t.BrowserSafariUrl = "https://www.apple.com/safari/"),
        (t.BrowserMicrosoftEdgeUrl = "https://www.microsoft.com/en-us/edge"),
        (t.EnableVectorInterfaceEncoding = !0),
        (t.ClientVersion = 0);
    })(G || (G = {})),
    (function (t) {
      t.list = function () {
        var t = [];
        function e(e, i) {
          e || t.push(i);
        }
        function i(t, i) {
          try {
            e(t(), i);
          } catch (t) {
            e(!1, i);
          }
        }
        return (
          i(function () {
            var t = document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"));
          }, "HTML5 Canvas"),
          e("undefined" != typeof WebSocket, "WebSockets"),
          i(function () {
            var t = document.createElement("div");
            return "draggable" in t || ("ondragstart" in t && "ondrop" in t);
          }, "HTML5 Drag-and-Drop"),
          e("undefined" != typeof URL, "window.URL Support"),
          e("undefined" != typeof XMLHttpRequest, "XML Http Requests"),
          i(function () {
            return "undefined" != typeof Uint32Array && "undefined" != typeof Uint8Array && void 0 !== new Uint8Array(2).set;
          }, "Native Type Arrays"),
          i(function () {
            var t = document.createElement("canvas");
            (t.width = 1), (t.height = 1);
            var e = t.getContext("2d").getImageData(0, 0, 1, 1).data;
            return new Int32Array(e.buffer).length > 0;
          }, "ImageData.data is not a Uint8ClampedArray"),
          e(!(!window.history || !window.history.pushState), "HTML5 History"),
          e("undefined" != typeof Worker, "Web Workers"),
          e(!!Date.now, "Date.now()"),
          i(function () {
            return !!new Blob();
          }, "Blob and/or Blob Constructor"),
          i(function () {
            return !!Blob.prototype.arrayBuffer;
          }, "Blob.arrayBuffer()"),
          i(function () {
            return !!new Path2D();
          }, "Path2D and/or Path2D Constructor"),
          i(function () {
            return !!window.PointerEvent;
          }, "PointerEvent"),
          t.sort(),
          t
        );
      };
    })(I || (I = {})),
    (function (t) {
      (t[(t.Trying = 0)] = "Trying"), (t[(t.Success = 1)] = "Success"), (t[(t.FailureSilent = 2)] = "FailureSilent"), (t[(t.FailureShown = 3)] = "FailureShown"), (t[(t.Stopped = 4)] = "Stopped");
    })(F || (F = {}));
  class lt {
    constructor(t) {
      (this.opts = t),
        (this.tries = 0),
        (this.triesEver = 0),
        (this.lastErrorMessage = ""),
        (this.isTrying = !1),
        (this.state = F.Trying),
        (this.timeout = 0),
        (this.executionStopped = () => {
          (this.state = F.Stopped), (this.isTrying = !1), (this.tries = 0), (this.lastErrorMessage = ""), R.deregister(this);
        }),
        (this.executionSuccess = () => {
          (this.state = F.Success), (this.isTrying = !1), (this.tries = 0), (this.lastErrorMessage = ""), this.opts.success(), R.deregister(this);
        }),
        (this.executionError = (t) => {
          (this.isTrying = !1),
            (this.lastErrorMessage = t.substr(0, 200)),
            this.tries < this.opts.numberOfSilentRetriesBeforeShowingErrorToUser ? ((this.state = F.FailureSilent), this.clearTimeout(), (this.timeout = setTimeout(this.tryExecute, this.opts.millisBetweenSilentRetries))) : this.opts.giveUpAfterSilentRetries ? (this.state = F.FailureSilent) : ((this.state = F.FailureShown), R.register(this));
        }),
        (this.executionPunt = () => {
          (this.isTrying = !1), (this.state = F.FailureSilent), this.clearTimeout(), (this.timeout = setTimeout(this.tryExecute, 100));
        }),
        (this.tryExecute = () => {
          if ((this.clearTimeout(), !this.isTrying)) {
            (this.state = F.Trying), (this.isTrying = !0), (this.tries += 1), (this.triesEver += 1);
            try {
              this.opts.execute(this.executionSuccess, this.executionError);
            } catch (t) {
              (this.tries = Math.max(this.tries, this.opts.numberOfSilentRetriesBeforeShowingErrorToUser)),
                setTimeout(() => {
                  this.executionError(t.toString());
                }, 0);
            }
            return !0;
          }
          return !1;
        });
    }
    start() {
      return this.tryExecute(), this;
    }
    clearTimeout() {
      this.timeout && (clearTimeout(this.timeout), (this.timeout = 0));
    }
    makeHtmlRow() {
      let t = $(document.createElement("tr"));
      return t.append(O.makeElement("td", this.opts.label)), t.append(O.makeElement("td", this.lastErrorMessage)), t;
    }
    toString() {
      return `RetryInstance(${this.opts.label}, tries: ${this.tries} (${this.triesEver}), err: '${this.lastErrorMessage}', isTrying: ${this.isTrying}, state: ${F[this.state]})`;
    }
  }
  !(function (t) {
    setTimeout(function () {
      !0;
    }, 0);
    var e = [],
      i = 5e3,
      r = 36e5,
      n = null,
      s = 0,
      o = i,
      h = !1;
    function c() {
      var t = a.RetryDialog.Body.$();
      t.empty();
      var i = $(document.createElement("tr"));
      i.append(O.makeElement("th", d.s("Task"))), i.append(O.makeElement("th", d.s("Error"))), t.append(i);
      for (var r = 0; r < e.length; r++) t.append(e[r].makeHtmlRow());
    }
    function l() {
      (s = Date.now()), null != n && (clearInterval(n), (n = null)), (o *= 2) > r && (o = r), a.RetryDialog.Countdown.$().text(d.s("Retrying now..."));
      for (var t = 0; t < e.length; t++) e[t].tryExecute();
    }
    function u() {
      var t = Date.now(),
        e = Math.round((s + o - t) / 1e3);
      e <= 0 ? l() : a.RetryDialog.Countdown.$().text(d.s("Retrying in {0} {0,plural,one{second}other{seconds}}...", e)), c();
    }
    (t.register = function (t) {
      e.indexOf(t) < 0 && (O.gaTrack("ErrorShown", t.opts.label, t.lastErrorMessage, null), e.push(t), c()), O.modal(a.RetryDialog.Dialog.css()), (h = !0), null == n && ((s = Date.now()), (n = setInterval(u, 1e3)));
    }),
      (t.deregister = function (t) {
        var r = e.indexOf(t);
        r >= 0 && (e.splice(r, 1), c()), (o = i), (s = Date.now()), 0 == e.length && h && a.RetryDialog.Dialog.$().modal("hide");
      }),
      $(() => {
        a.RetryDialog.RetryNowButton.$().click(() => {
          l(), (o = i);
        });
      });
  })(R || (R = {})),
    (function (t) {
      (t[(t.Disconnected = 0)] = "Disconnected"), (t[(t.Connecting = 1)] = "Connecting"), (t[(t.Connected = 2)] = "Connected"), (t[(t.Error = 3)] = "Error");
    })(E || (E = {}));
  class ut {
    constructor(t) {
      (this.state = E.Disconnected),
        (this.websocket = null),
        (this.arraybuffer = null),
        (this.hasReceivedMessage = !1),
        (this.closeReason = null),
        (this.lastDebugUrl = "unknown"),
        (this.opts = $.extend({ numberOfSilentRetriesBeforeShowingErrorToUser: 3, millisBetweenSilentRetries: 1e3 }, t)),
        (this.eventHandlers = {
          open: (t) => {
            this.onOpen();
          },
          close: (t) => {
            this.onClose(t);
          },
          message: (t) => {
            this.onMessage(t);
          },
          heartbeater: () => {
            this.opts.heartbeat && null != this.websocket && this.websocket.readyState == WebSocket.OPEN && this.doSend(this.opts.heartbeat.message);
          },
        }),
        (this.retryable = new lt({
          label: this.opts.label,
          execute: (t, e) => {
            this.clearWebSocket(E.Connecting), (this.hasReceivedMessage = !1), (this.closeReason = null);
            let i = this.opts.url();
            (this.lastDebugUrl = i.split("?")[0]), (this.websocket = new WebSocket(i)), (this.websocket.binaryType = "arraybuffer"), this.websocket.addEventListener("open", this.eventHandlers.open), this.websocket.addEventListener("close", this.eventHandlers.close), this.websocket.addEventListener("message", this.eventHandlers.message);
          },
          success: () => {
            this.opts.connectedToNewServer();
          },
          numberOfSilentRetriesBeforeShowingErrorToUser: this.opts.numberOfSilentRetriesBeforeShowingErrorToUser,
          millisBetweenSilentRetries: this.opts.millisBetweenSilentRetries,
        }).start());
    }
    clearWebSocket(t) {
      (this.state = t),
        null != this.websocket && (this.websocket.removeEventListener("open", this.eventHandlers.open), this.websocket.removeEventListener("close", this.eventHandlers.close), this.websocket.removeEventListener("message", this.eventHandlers.message), this.websocket.close(), (this.websocket = null)),
        (this.arraybuffer = null),
        this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = void 0));
    }
    onOpen() {
      O.gaTrack("WebSocket", this.lastDebugUrl, "connected", 1), this.opts.heartbeat && this.opts.heartbeat.millis > 0 && (this.heartbeatTimer = setInterval(this.eventHandlers.heartbeater, this.opts.heartbeat.millis)), this.opts.sendOnOpen ? this.doSend(this.opts.sendOnOpen) : this.eventHandlers.heartbeater();
    }
    onClose(t) {
      this.clearWebSocket(E.Disconnected);
      let e = t.reason;
      if ((this.closeReason && !e && (e = this.closeReason.code.toString()), e)) {
        if (this.opts.puntOnCloseReason && this.opts.puntOnCloseReason(e)) return void this.retryable.executionPunt();
        {
          let t = this.opts.closeReasonToMessage(e);
          if (t) return this.onError(t);
        }
      } else if (!this.hasReceivedMessage) return this.onError(this.opts.unableToConnectMessage);
      this.opts.disconnectedFromServer() ? this.onError(this.opts.unexpectedCloseMessage) : this.retryable.executionStopped();
    }
    onError(t) {
      O.gaTrack("WebSocket", this.lastDebugUrl, "error: " + t, 0), (this.opts.customOnError && !this.opts.customOnError(t)) || this.retryable.executionError(t);
    }
    onMessage(t) {
      if ("string" == typeof t.data) {
        const e = JSON.parse(t.data);
        if (e.closeReason) return (this.closeReason = e.closeReason), void this.websocket.close();
        !this.hasReceivedMessage && this.doSend(this.opts.heartbeat.message) && ((this.hasReceivedMessage = !0), (this.state = E.Connected), this.retryable.executionSuccess()), null != this.arraybuffer && ((e.arraybuffer = this.arraybuffer), (this.arraybuffer = null)), this.opts.newMessageFromServer(e);
      } else this.arraybuffer = t.data;
    }
    doSend(t, e = !1) {
      try {
        let i = e ? t : JSON.stringify(t);
        return this.websocket.send(i), !0;
      } catch (t) {
        return this.clearWebSocket(E.Error), this.onError(this.opts.sendFailedMessage + "Error: " + t), !1;
      }
    }
    send0(t, e) {
      return null == this.websocket || this.websocket.readyState != WebSocket.OPEN ? (null == this.websocket && this.retryable.tryExecute(), !1) : this.doSend(t, e);
    }
    send(t) {
      return this.send0(t, !1);
    }
    sendBinary(t) {
      return this.send0(t, !0);
    }
    getState() {
      return this.state;
    }
    forceClose() {
      this.clearWebSocket(E.Disconnected);
    }
  }
  !(function (t) {
    function e(e) {
      a.FatalError.Message.$().text(e), t.modal(a.FatalError.Dialog), t.gaTrack("ErrorShown", "Fatal", e);
    }
    (t.countInstances = function (t, e) {
      const i = e.charCodeAt(0);
      for (var r = 0, n = 0; n < t.length; n++) t.charCodeAt(n) == i && r++;
      return r;
    }),
      (t.whilePressing = function (t, e, i) {
        function r() {
          window.removeEventListener("touchend", r), window.removeEventListener("mouseup", r), i();
        }
        function n() {
          window.addEventListener("touchend", r), window.addEventListener("mouseup", r), e();
        }
        t.$().each(function (t, e) {
          e.addEventListener("touchstart", n), e.addEventListener("mousedown", n);
        });
      }),
      (t.radioButton = function (t, e, i) {
        let r = t.$();
        r.click((t) => {
          t.preventDefault(), t.stopPropagation(), !r.hasClass(o.active.name()) ? e() : i();
        });
      }),
      (t.blurActiveElement = function () {
        document.activeElement instanceof HTMLElement ? document.activeElement.blur() : window.focus();
      }),
      (t.progressBar = function (t, e) {
        let i = 0 < e && e < 100;
        e < 0 ? (e = 0) : e > 100 && (e = 100),
          t.Bar.$()
            .css({ width: e + "%" })
            .toggleClass("active", i);
      }),
      (t.fatalError = function (i) {
        e(t.stringify(i));
      }),
      (t.fatalErrorStr = e),
      (t.progress = function (e) {
        e ? t.modal(a.App.ProgressLightbox) : a.App.ProgressLightbox.$().modal("hide");
      }),
      (t.progressUpdate = function (t) {
        a.App.ProgressLightboxBar.Bar.$().attr("style", "width:" + t + "%");
      });
  })(O || (O = {})),
    (function (t) {
      (t.getWorkerUrl = function (t, e) {
        let i = ("http:" == location.protocol ? "ws:" : "wss:") + "//" + location.host + t + "?" + window.GlobalsEx.LocaleParameter;
        for (let t in e) e.hasOwnProperty(t) && (i += "&" + t + "=" + encodeURIComponent(e[t]));
        return i;
      }),
        (t.getFeedbackUrl = function (t, e) {
          return `/images/${t}/feedback?message=${encodeURIComponent(e)}`;
        });
    })(_ || (_ = {}));
  class dt {
    constructor(t, e) {
      (this.arraybuffer = t), (this.littleEndian = e), (this.dataview = new DataView(t)), (this.offset = 0);
    }
    current() {
      return this.offset;
    }
    reset() {
      this.offset = 0;
    }
    seek(t) {
      this.offset = t;
    }
    byteLength() {
      return this.arraybuffer.byteLength;
    }
    hasMore(t = 1) {
      return this.offset + t <= this.byteLength();
    }
    skip(t) {
      this.offset += t;
    }
    debug(t) {
      return t;
    }
    advance(t) {
      let e = this.offset;
      return (this.offset += t), e;
    }
    nonEmpty() {
      return this.byteLength() > 0;
    }
    readBoolean() {
      return 0 != this.readInt8();
    }
    readInt8() {
      return this.debug(this.dataview.getInt8(this.advance(1)));
    }
    readUint8() {
      return this.debug(this.dataview.getUint8(this.advance(1)));
    }
    readInt16() {
      return this.debug(this.dataview.getInt16(this.advance(2), this.littleEndian));
    }
    readUint16() {
      return this.debug(this.dataview.getUint16(this.advance(2), this.littleEndian));
    }
    readInt32() {
      return this.debug(this.dataview.getInt32(this.advance(4), this.littleEndian));
    }
    readUint32() {
      return this.debug(this.dataview.getUint32(this.advance(4), this.littleEndian));
    }
    readFloat32() {
      return this.debug(this.dataview.getFloat32(this.advance(4), this.littleEndian));
    }
    readFloat64() {
      return this.debug(this.dataview.getFloat64(this.advance(8), this.littleEndian));
    }
  }
  !(function (t) {
    const e = 1e-6,
      i = [];
    t.solve = function (t, r, n) {
      if (Math.abs(t) < e) return Math.abs(r) < e ? i : [-n / r];
      {
        let s = r * r - 4 * t * n;
        return s > e ? [(-r + Math.sqrt(s)) / (2 * t), (-r - Math.sqrt(s)) / (2 * t)] : s < -1e-6 ? i : [-r / (2 * t)];
      }
    };
  })(D || (D = {})),
    (function (t) {
      function e(t, e) {
        return ((t % e) + e) % e;
      }
      function i(t, e) {
        return ((t % e) - e) % e;
      }
      (t.TwoPi = 2 * Math.PI),
        (t.Rad90 = Math.PI / 2),
        (t.Rad180 = Math.PI),
        (t.Rad270 = (3 * Math.PI) / 2),
        (t.posMod = e),
        (t.negMod = i),
        (t.posRelMod = function (t, i, r) {
          return e(t - i, r) + i;
        }),
        (t.negRelMod = function (t, e, r) {
          return i(t - e, r) + e;
        }),
        (t.minMod = function (t, r) {
          var n = e(t, r),
            s = i(t, r);
          return Math.abs(n) <= Math.abs(s) ? n : s;
        });
    })(L || (L = {})),
    (function (t) {
      function e(t, e) {
        return Math.round(t * e) / e;
      }
      function i(i) {
        return e(i, t.roundingRules.scaleDeg);
      }
      t.roundingRules = void 0;
      t.RenderSpec = class {
        constructor(t, e) {
          (this.scale = t), (this.visibleImageRect = e);
        }
      };
      class r {
        constructor(t, e, i, r) {
          (this.startX = t), (this.startY = e), (this.endX = i), (this.endY = r), (this.bounds = at.empty());
        }
        static readWithCursor(t, e, i) {
          let r = c.cast(i.readInt8());
          switch (r) {
            case 0:
              return n.readWithCursor(t, e, i);
            case 1:
              return s.readWithCursor(t, e, i);
            case 2:
              return o.readWithCursor(t, e, i);
            case 3:
            case 4:
              return a.readWithCursor(t, e, i);
            case 5:
            case 6:
              return h.readWithCursor(t, e, i);
          }
          throw `Unknown CurveType: ${r}`;
        }
        static readWithoutCursor(t) {
          let e = c.cast(t.readInt8());
          switch (e) {
            case 0:
              return n.readWithoutCursor(t);
            case 1:
              return s.readWithoutCursor(t);
            case 2:
              return o.readWithoutCursor(t);
            case 3:
            case 4:
              return a.readWithoutCursor(t);
            case 5:
            case 6:
              return h.readWithoutCursor(t);
          }
          throw `Unknown CurveType: ${e}`;
        }
        static readArray(t) {
          let e = t.readInt32(),
            i = new Array(e);
          for (let n = 0; n < e; n++) i[n] = r.readWithoutCursor(t);
          return i;
        }
        moveTo(t) {
          t.moveTo(this.startX, this.startY);
        }
        drawAsLineTo(t) {
          t.lineTo(this.endX, this.endY);
        }
      }
      class n extends r {
        constructor(t, e, i, r) {
          super(t, e, i, r), this.updateBounds();
        }
        static readWithCursor(t, e, i) {
          let r = i.readFloat32(),
            s = i.readFloat32();
          return new n(t, e, r, s);
        }
        static readWithoutCursor(t) {
          let e = t.readFloat32(),
            i = t.readFloat32(),
            r = t.readFloat32(),
            s = t.readFloat32();
          return new n(e, i, r, s);
        }
        drawTo(t) {
          t.lineTo(this.endX, this.endY);
        }
        updateBounds() {
          this.bounds.addXy(this.startX, this.startY), this.bounds.addXy(this.endX, this.endY);
        }
      }
      class s extends r {
        constructor(t, e, i, r, n, s) {
          super(t, e, n, s), (this.controlX = i), (this.controlY = r), this.updateBounds();
        }
        static readWithCursor(t, e, i) {
          let r = i.readFloat32(),
            n = i.readFloat32(),
            o = i.readFloat32(),
            a = i.readFloat32();
          return new s(t, e, r, n, o, a);
        }
        static readWithoutCursor(t) {
          let e = t.readFloat32(),
            i = t.readFloat32(),
            r = t.readFloat32(),
            n = t.readFloat32(),
            o = t.readFloat32(),
            a = t.readFloat32();
          return new s(e, i, r, n, o, a);
        }
        drawTo(t) {
          t.quadraticCurveTo(this.controlX, this.controlY, this.endX, this.endY);
        }
        evalX(t) {
          return this.startX * (1 - t) * (1 - t) + 2 * this.controlX * (1 - t) * t + this.endX * t * t;
        }
        evalY(t) {
          return this.startY * (1 - t) * (1 - t) + 2 * this.controlY * (1 - t) * t + this.endY * t * t;
        }
        tForExtremeX() {
          let t = this.controlX - this.startX,
            e = -t / (this.endX - this.controlX - t);
          return e > 0 && e < 1 ? e : 0;
        }
        tForExtremeY() {
          let t = this.controlY - this.startY,
            e = -t / (this.endY - this.controlY - t);
          return e > 0 && e < 1 ? e : 0;
        }
        updateBounds() {
          this.bounds.addXy(this.startX, this.startY), this.bounds.addXy(this.endX, this.endY), this.bounds.addX(this.evalX(this.tForExtremeX())), this.bounds.addY(this.evalY(this.tForExtremeY()));
        }
      }
      class o extends r {
        constructor(t, e, i, r, n, s, o, a) {
          super(t, e, o, a), (this.controlStartX = i), (this.controlStartY = r), (this.controlEndX = n), (this.controlEndY = s), this.updateBounds();
        }
        static readWithCursor(t, e, i) {
          let r = i.readFloat32(),
            n = i.readFloat32(),
            s = i.readFloat32(),
            a = i.readFloat32(),
            h = i.readFloat32(),
            c = i.readFloat32();
          return new o(t, e, r, n, s, a, h, c);
        }
        static readWithoutCursor(t) {
          let e = t.readFloat32(),
            i = t.readFloat32(),
            r = t.readFloat32(),
            n = t.readFloat32(),
            s = t.readFloat32(),
            a = t.readFloat32(),
            h = t.readFloat32(),
            c = t.readFloat32();
          return new o(e, i, r, n, s, a, h, c);
        }
        drawTo(t) {
          t.bezierCurveTo(this.controlStartX, this.controlStartY, this.controlEndX, this.controlEndY, this.endX, this.endY);
        }
        evalX(t) {
          let e = 1 - t;
          return this.startX * e * e * e + 3 * this.controlStartX * e * e * t + 3 * this.controlEndX * e * t * t + this.endX * t * t * t;
        }
        evalY(t) {
          let e = 1 - t;
          return this.startY * e * e * e + 3 * this.controlStartY * e * e * t + 3 * this.controlEndY * e * t * t + this.endY * t * t * t;
        }
        filterExtremeTs(t) {
          return t.filter((t) => t > 0 && t < 1);
        }
        tsForExtremeXs() {
          let t = 3 * (this.controlStartX - this.startX),
            e = 3 * (this.controlEndX - this.controlStartX),
            i = t - 2 * e + 3 * (this.endX - this.controlEndX),
            r = 2 * (e - t),
            n = t;
          return this.filterExtremeTs(D.solve(i, r, n));
        }
        tsForExtremeYs() {
          let t = 3 * (this.controlStartY - this.startY),
            e = 3 * (this.controlEndY - this.controlStartY),
            i = t - 2 * e + 3 * (this.endY - this.controlEndY),
            r = 2 * (e - t),
            n = t;
          return this.filterExtremeTs(D.solve(i, r, n));
        }
        updateBounds() {
          this.bounds.addXy(this.startX, this.startY), this.bounds.addXy(this.endX, this.endY);
          for (let t of this.tsForExtremeXs()) this.bounds.addX(this.evalX(t));
          for (let t of this.tsForExtremeYs()) this.bounds.addY(this.evalY(t));
        }
      }
      class a extends r {
        constructor(t, e, i, r, n, s, o, a, h, c, l) {
          super(i, r, c, l), (this.isLargeArc = t), (this.isClockwise = e), (this.centerX = n), (this.centerY = s), (this.radius = o), (this.thetaStartRad = a), (this.deltaThetaRad = h), this.updateBounds();
        }
        static readWithCursor(t, e, i) {
          let r = 0 != i.readInt8(),
            n = 0 != i.readInt8(),
            s = i.readFloat32(),
            o = i.readFloat32(),
            h = i.readFloat32(),
            c = i.readFloat32(),
            l = i.readFloat32(),
            u = i.readFloat32(),
            d = i.readFloat32();
          return new a(r, n, t, e, s, o, h, c, l, u, d);
        }
        static readWithoutCursor(t) {
          let e = 0 != t.readInt8(),
            i = 0 != t.readInt8(),
            r = t.readFloat32(),
            n = t.readFloat32(),
            s = t.readFloat32(),
            o = t.readFloat32(),
            h = t.readFloat32(),
            c = t.readFloat32(),
            l = t.readFloat32(),
            u = t.readFloat32(),
            d = t.readFloat32();
          return new a(e, i, r, n, s, o, h, c, l, u, d);
        }
        getThetaEndRad() {
          return this.thetaStartRad + this.deltaThetaRad;
        }
        largeArcFlag() {
          return this.isLargeArc ? "1" : "0";
        }
        sweepFlag() {
          return this.isClockwise ? "1" : "0";
        }
        drawTo(t) {
          t.ellipse(this.centerX, this.centerY, this.radius, this.radius, 0, this.thetaStartRad, this.getThetaEndRad(), !this.isClockwise);
        }
        interpolateThetaRad(t) {
          return t <= 0 ? this.thetaStartRad : t >= 1 ? this.getThetaEndRad() : this.thetaStartRad + this.deltaThetaRad * t;
        }
        evalX(t) {
          return this.centerX + Math.cos(this.interpolateThetaRad(t)) * this.radius;
        }
        evalY(t) {
          return this.centerY + Math.sin(this.interpolateThetaRad(t)) * this.radius;
        }
        isPositive() {
          return this.deltaThetaRad > 0;
        }
        tForThetaRad(t) {
          return ((this.isPositive() ? L.posRelMod(t, this.thetaStartRad, L.TwoPi) : L.negRelMod(t, this.thetaStartRad, L.TwoPi)) - this.thetaStartRad) / this.deltaThetaRad;
        }
        thetaRadIsOnArcInterior(t) {
          let e = this.tForThetaRad(t);
          return e > 0 && e < 1;
        }
        updateBounds() {
          this.thetaRadIsOnArcInterior(0) && this.bounds.addX(this.centerX + this.radius),
            this.thetaRadIsOnArcInterior(L.Rad90) && this.bounds.addY(this.centerY + this.radius),
            this.thetaRadIsOnArcInterior(L.Rad180) && this.bounds.addX(this.centerX - this.radius),
            this.thetaRadIsOnArcInterior(L.Rad270) && this.bounds.addY(this.centerY - this.radius),
            this.bounds.addXy(this.startX, this.startY),
            this.bounds.addXy(this.endX, this.endY);
        }
      }
      class h extends r {
        constructor(t, e, i, r, n, s, o, a, h, c, l, u, d) {
          super(i, r, u, d), (this.isLargeArc = t), (this.isClockwise = e), (this.centerX = n), (this.centerY = s), (this.radiusX = o), (this.radiusY = a), (this.rotationRad = h), (this.thetaStartRad = c), (this.deltaThetaRad = l), this.updateBounds();
        }
        static readWithCursor(t, e, i) {
          let r = 0 != i.readInt8(),
            n = 0 != i.readInt8(),
            s = i.readFloat32(),
            o = i.readFloat32(),
            a = i.readFloat32(),
            c = i.readFloat32(),
            l = i.readFloat32(),
            u = i.readFloat32(),
            d = i.readFloat32(),
            p = i.readFloat32(),
            m = i.readFloat32();
          return new h(r, n, t, e, s, o, a, c, l, u, d, p, m);
        }
        static readWithoutCursor(t) {
          let e = 0 != t.readInt8(),
            i = 0 != t.readInt8(),
            r = t.readFloat32(),
            n = t.readFloat32(),
            s = t.readFloat32(),
            o = t.readFloat32(),
            a = t.readFloat32(),
            c = t.readFloat32(),
            l = t.readFloat32(),
            u = t.readFloat32(),
            d = t.readFloat32(),
            p = t.readFloat32(),
            m = t.readFloat32();
          return new h(e, i, r, n, s, o, a, c, l, u, d, p, m);
        }
        getThetaEndRad() {
          return this.thetaStartRad + this.deltaThetaRad;
        }
        largeArcFlag() {
          return this.isLargeArc ? "1" : "0";
        }
        sweepFlag() {
          return this.isClockwise ? "1" : "0";
        }
        rotationDeg() {
          return (180 * this.rotationRad) / Math.PI;
        }
        drawTo(t) {
          t.ellipse(this.centerX, this.centerY, this.radiusX, this.radiusY, this.rotationRad, this.thetaStartRad, this.getThetaEndRad(), !this.isClockwise);
        }
        isPositive() {
          return this.deltaThetaRad > 0;
        }
        tForThetaRad(t) {
          return ((t = this.isPositive() ? L.posRelMod(t, this.thetaStartRad, L.TwoPi) : L.negRelMod(t, this.thetaStartRad, L.TwoPi)) - this.thetaStartRad) / this.deltaThetaRad;
        }
        thetaRadIsOnArcInterior(t) {
          let e = this.tForThetaRad(t);
          return e > 0 && e < 1;
        }
        updateBounds() {
          let t = Math.sin(this.rotationRad),
            e = Math.cos(this.rotationRad),
            i = Math.atan2(-this.radiusY * t, this.radiusX * e),
            r = i + Math.PI,
            n = Math.atan2(this.radiusY * e, this.radiusX * t),
            s = n + Math.PI;
          this.thetaRadIsOnArcInterior(i) && this.bounds.addX(this.centerX + this.radiusX * e * Math.cos(i) - this.radiusY * t * Math.sin(i)),
            this.thetaRadIsOnArcInterior(r) && this.bounds.addX(this.centerX + this.radiusX * e * Math.cos(r) - this.radiusY * t * Math.sin(r)),
            this.thetaRadIsOnArcInterior(n) && this.bounds.addY(this.centerY + this.radiusX * t * Math.cos(n) + this.radiusY * e * Math.sin(n)),
            this.thetaRadIsOnArcInterior(s) && this.bounds.addY(this.centerY + this.radiusX * t * Math.cos(s) + this.radiusY * e * Math.sin(s)),
            this.bounds.addXy(this.startX, this.startY),
            this.bounds.addXy(this.endX, this.endY);
        }
      }
      class l {
        constructor(t, e) {
          (this.curves = t), (this.resultLoop = e), (this.bounds = at.empty());
          for (let t of this.curves) this.bounds.addRect(t.bounds);
        }
        static read(t, e) {
          return new l(r.readArray(t), e);
        }
        numCurves() {
          return this.curves.length;
        }
        drawTo(t, e) {
          this.curves[0].moveTo(t);
          if (this.curves.length > 500 && this.bounds.area() > 5 * e.visibleImageRect.dup().intersectionWith(this.bounds).area()) for (let i of this.curves) i.bounds.intersects(e.visibleImageRect) ? i.drawTo(t) : i.drawAsLineTo(t);
          else for (let e of this.curves) e.drawTo(t);
          t.closePath();
        }
      }
      class u {
        constructor(t, e, i) {
          (this.index = t), (this.vectorShapeIndex = e), (this.isPositive = i), (this.childShapes = []), (this.vectorInterfaces = []), (this.hasNonOpaqueDescendents = !1), (this.vectorInterfacesToDraw = []);
        }
        static from(t) {
          let e = c.cast(t.readInt8()),
            i = t.readInt32(),
            r = t.readInt32(),
            n = t.readBoolean();
          switch (e) {
            case 0:
              return new d(t, i, r, n);
            case 1:
              return new f(t, i, r, n);
            case 2:
              return new m(t, i, r, n);
            case 3:
              return new p(t, i, r, n);
          }
        }
        commit(t) {
          t.vectorShapes[this.vectorShapeIndex].vectorLoops.push(this), (this.vectorShape = t.vectorShapes[this.vectorShapeIndex]);
        }
        setHasNonOpaqueDescendents() {
          this.hasNonOpaqueDescendents || ((this.hasNonOpaqueDescendents = !0), null != this.vectorShape && this.vectorShape.setHasNonOpaqueDescendents());
        }
        filterVectorInterfaces() {
          this.vectorInterfacesToDraw = this.vectorInterfaces.filter((t) => t.shouldDraw());
        }
        shouldDraw() {
          return this.isPositive || this.hasNonOpaqueDescendents;
        }
        readSharedData(t) {
          this.curveLoop = l.read(t, this);
        }
        isNegative() {
          return !this.isPositive;
        }
        numCurves() {
          return this.curveLoop.numCurves();
        }
        drawTo(t, e) {
          this.curveLoop.drawTo(t, e);
        }
        bounds() {
          return this.curveLoop.bounds;
        }
      }
      class d extends u {
        constructor(t, e, i, r) {
          super(e, i, r), this.readSharedData(t);
        }
        requiresHighPrecisionPath() {
          return !1;
        }
        type() {
          return 0;
        }
      }
      class p extends u {
        constructor(t, e, i, r) {
          super(e, i, r), (this.centerX = t.readFloat32()), (this.centerY = t.readFloat32()), (this.halfWidth = t.readFloat32()), (this.halfHeight = t.readFloat32()), (this.cornerRadius = t.readFloat32()), (this.rotationRad = t.readFloat32()), this.readSharedData(t);
        }
        requiresHighPrecisionPath() {
          return 0 != this.rotationDeg();
        }
        width() {
          return 2 * this.halfWidth;
        }
        height() {
          return 2 * this.halfHeight;
        }
        rotationDeg() {
          return i((180 * this.rotationRad) / Math.PI);
        }
        type() {
          return 3;
        }
      }
      class m extends u {
        constructor(t, e, i, r) {
          super(e, i, r), (this.sample = new st(0, 0)), (this.centerX = t.readFloat32()), (this.centerY = t.readFloat32()), (this.radiusX = t.readFloat32()), (this.radiusY = t.readFloat32()), (this.rotationRad = t.readFloat32()), this.readSharedData(t);
        }
        requiresHighPrecisionPath() {
          return 0 != this.rotationDeg();
        }
        sampleAt(t, e = this.sample) {
          let i = Math.cos(t) * this.radiusX,
            r = Math.sin(t) * this.radiusY,
            n = this.centerX + i * this.cosRotation - r * this.sinRotation,
            s = this.centerY + i * this.sinRotation + r * this.cosRotation;
          return e.setXy(n, s);
        }
        rotationDeg() {
          return i((180 * this.rotationRad) / Math.PI);
        }
        type() {
          return 2;
        }
      }
      class f extends u {
        constructor(t, e, i, r) {
          super(e, i, r), (this.sample = new st(0, 0)), (this.centerX = t.readFloat32()), (this.centerY = t.readFloat32()), (this.radius = t.readFloat32()), this.readSharedData(t);
        }
        requiresHighPrecisionPath() {
          return !1;
        }
        sampleAt(t, e = this.sample) {
          let i = this.centerX + Math.cos(t) * this.radius,
            r = this.centerY + Math.sin(t) * this.radius;
          return e.setXy(i, r);
        }
        type() {
          return 1;
        }
      }
      class g {
        static from(t) {
          let e = t.readInt32(),
            i = t.readInt32(),
            r = t.readInt32();
          return new g(e, i, r);
        }
        constructor(t, e, i) {
          (this.index = t), (this.parentLoopIndex = e), (this.paletteIndex = i), (this.vectorLoops = []), (this.hasNonOpaqueDescendents = !1);
        }
        commit(t) {
          (this.vectorImage = t), this.parentLoopIndex >= 0 && ((this.parentLoop = t.vectorLoops[this.parentLoopIndex]), this.parentLoop.childShapes.push(this));
        }
        setHasNonOpaqueDescendents() {
          this.hasNonOpaqueDescendents || ((this.hasNonOpaqueDescendents = !0), null != this.parentLoop && this.parentLoop.setHasNonOpaqueDescendents());
        }
        filterVectorLoops() {
          this.vectorLoopsToDraw = this.vectorLoops.filter((t) => t.shouldDraw());
        }
        paletteEntry() {
          return this.vectorImage.palette.get(this.paletteIndex);
        }
        pathFor(t) {
          let e = new Path2D();
          for (let i of this.vectorLoopsToDraw)
            if (i.bounds().intersects(t.visibleImageRect)) i.drawTo(e, t);
            else if (0 == i.index) return;
          return e;
        }
        numCurves() {
          let t = 0;
          for (let e of this.vectorLoops) t += e.numCurves();
          return t;
        }
        isPositiveParameterizedShapeWithNoHoles() {
          return 1 == this.vectorLoops.length && 0 != this.vectorLoops[0].type();
        }
      }
      class w {
        constructor(t, e, i, r, n) {
          (this.parentVectorLoopIndex = t), (this.vectorLoopIndex0 = e), (this.vectorLoopIndex1 = i), (this.argbInt = r), (this.curves = n), (this.bounds = at.empty()), (this.isSiblingInterface = !1), (this.hasNonOpaqueDescendents = !1);
          let s = ((this.argbInt >> 24) & 255) / 255,
            o = (this.argbInt >> 16) & 255,
            a = (this.argbInt >> 8) & 255,
            h = (this.argbInt >> 0) & 255;
          this.css = `rgba(${o},${a},${h},${s})`;
          let c = new Path2D();
          this.curves[0].moveTo(c);
          for (let t of this.curves) t.drawTo(c);
          this.path = c;
          for (let t of this.curves) this.bounds.addRect(t.bounds);
        }
        static from(t) {
          let e = t.readInt32(),
            i = t.readInt32(),
            n = t.readInt32(),
            s = t.readInt32(),
            o = r.readArray(t);
          return new w(e, i, n, s, o);
        }
        commit(t) {
          t.vectorLoops[this.parentVectorLoopIndex].vectorInterfaces.push(this),
            (this.parentVectorLoop = t.vectorLoops[this.parentVectorLoopIndex]),
            (this.vectorLoop0 = t.vectorLoops[this.vectorLoopIndex0]),
            (this.vectorLoop1 = t.vectorLoops[this.vectorLoopIndex1]),
            (this.color0 = this.vectorLoop0.vectorShape.paletteEntry()),
            (this.color1 = this.vectorLoop1.vectorShape.paletteEntry()),
            (this.isSiblingInterface = this.vectorLoop0.isPositive && this.vectorLoop1.isPositive),
            (this.hasNonOpaqueDescendents = this.vectorLoop0.hasNonOpaqueDescendents || this.vectorLoop1.hasNonOpaqueDescendents);
        }
        shouldDraw() {
          let t = this.color0.opacity,
            e = this.color1.opacity;
          return (this.isSiblingInterface || this.hasNonOpaqueDescendents) && (t > 0.99 || e > 0.99) && t > 0.01 && e > 0.01;
        }
      }
      class v {
        constructor(t, e, i) {
          (this.vectorShapes = t), (this.vectorLoops = e), (this.vectorInterfaces = i);
        }
        static from(t) {
          let e = new dt(t.arraybuffer, !1),
            i = e.readInt32(),
            r = new Array(i);
          for (let t = 0; t < i; t++) r[t] = g.from(e);
          let n = e.readInt32(),
            s = new Array(n);
          for (let t = 0; t < n; t++) s[t] = u.from(e);
          let o = e.readInt32(),
            a = new Array(o);
          for (let t = 0; t < o; t++) a[t] = w.from(e);
          return new v(r, s, a);
        }
      }
      t.ResultChunk = v;
      class b {
        constructor(t) {
          this.buf = new dt(t, !1);
          this.buf.readInt32();
          (this.w = this.buf.readInt32()), (this.h = this.buf.readInt32()), (this.size = this.w * this.h), (this.offset0 = this.buf.current());
        }
        foreach(t) {
          this.buf.seek(this.offset0);
          let e = 0;
          for (; e < this.size; ) {
            let i = this.buf.readUint8(),
              r = this.buf.readUint8();
            if (128 == (128 & r)) {
              let t = this.buf.readUint8();
              r = (this.buf.readUint8() << 15) | (t << 7) | (127 & r);
            }
            (r += 1), (e += r), t(i, r);
          }
        }
      }
      t.Palette = class {
        constructor(t) {
          (this.palette = t), (this.length = this.palette.colors.length), (this.recommendedNumColors = this.palette.recommendedNumColors), (this.chosenNumColors = this.palette.chosenNumColors), (this.lastNumColors = -1), (this.lastHighlightCurrentColor = !1);
        }
        setPaletteIndexMap(t) {
          t && (this.paletteIndexMap = new b(t));
        }
        get(t) {
          return this.palette.colors[t];
        }
        numColors() {
          return -1 == this.lastNumColors ? this.chosenNumColors : this.lastNumColors;
        }
        getPaletteFor(t, e) {
          let i = [];
          for (let r = 0; r < this.length; r++) {
            let n = this.palette.colors[r];
            for (; n.index >= t; ) n = this.palette.colors[n.redirectIndex];
            let s = n.argb,
              o = (s >> 24) & 255,
              a = (s >> 16) & 255,
              h = (s >> 8) & 255,
              c = (s >> 0) & 255;
            e && n.index == t - 1 && ((o = 255), a > 128 && h < 128 && c < 128 ? ((a = c = 0), (h = 255)) : ((a = 255), (h = c = 0))), i.push(new Uint8Array([a, h, c, o]));
          }
          return i;
        }
        getCanvas(t, e) {
          if (!this.paletteIndexMap) return null;
          if ((this.canvas || ((this.canvas = new ct(this.paletteIndexMap.w, this.paletteIndexMap.h)), (this.pixels = this.canvas.context().getImageDataFull())), t != this.lastNumColors || e != this.lastHighlightCurrentColor)) {
            (this.lastNumColors = t), (this.lastHighlightCurrentColor = e);
            let i = this.getPaletteFor(t, e),
              r = this.pixels.data,
              n = 0;
            this.paletteIndexMap.foreach((t, e) => {
              let s = i[t];
              for (let t = 0; t < e; t++, n++) r.set(s, 4 * n);
            }),
              this.canvas.context().putImageData(this.pixels, 0, 0);
          }
          return this.canvas;
        }
      };
      t.VectorImage = class {
        constructor(e, i, r, n) {
          (this.name = e), (this.imageWidth = i), (this.imageHeight = r), (this.resultStart = n), (this.vectorShapes = []), (this.topVectorShapes = []), (this.vectorLoops = []), (this.vectorInterfaces = []), (this.isReady = !1), (this.palette = new t.Palette(n.palette));
        }
        appendChunk(t) {
          for (let e of t.vectorShapes) (this.vectorShapes[e.index] = e), e.parentLoopIndex < 0 && this.topVectorShapes.push(e);
          for (let e of t.vectorLoops) this.vectorLoops[e.index] = e;
          for (let e of t.vectorInterfaces) this.vectorInterfaces.push(e);
        }
        commit() {
          for (let t of this.vectorShapes) t.commit(this);
          for (let t of this.vectorLoops) t.commit(this);
          for (let t of this.vectorShapes) t.paletteEntry().opacity < 1 && t.setHasNonOpaqueDescendents();
          for (let t of this.vectorInterfaces) t.commit(this);
          for (let t of this.vectorShapes) t.filterVectorLoops();
          for (let t of this.vectorLoops) t.filterVectorInterfaces();
          this.isReady = !0;
        }
        numCurves() {
          let t = 0;
          for (let e of this.vectorShapes) t += e.numCurves();
          return t;
        }
        drawTo(t, e) {
          if (this.isReady) {
            (t.lineJoin = "bevel"), (t.lineWidth = 2 / e.scale), t.save(), t.beginPath(), t.rect(0, 0, this.imageWidth, this.imageHeight), t.clip();
            let i = (i) => {
              for (let r of i) r.shouldDraw() && r.bounds.intersects(e.visibleImageRect) && ((t.strokeStyle = r.css), t.stroke(r.path));
            };
            for (let t of this.topVectorShapes) i(t.vectorLoops[0].vectorInterfacesToDraw);
            for (let r of this.vectorShapes) {
              let n = this.palette.get(r.paletteIndex);
              if (0 != n.opacity) {
                t.fillStyle = n.css;
                let i = r.pathFor(e);
                i && t.fill(i);
              }
              for (let t of r.vectorLoops) 0 != t.index && i(t.vectorInterfacesToDraw);
            }
            t.restore();
          }
        }
        outlineWidth(t) {
          let e = 1;
          return t > 4 && (e = 1 + 2 * O.clamp((t - 4) / 12, 0, 1)), e / t;
        }
        drawOutlinesTo(t, e) {
          (t.lineJoin = "bevel"), (t.lineWidth = this.outlineWidth(e.scale)), (t.strokeStyle = "#0FF");
          for (let i of this.vectorShapes) {
            let r = i.pathFor(e);
            r && t.stroke(r);
          }
        }
      };
    })(B || (B = {})),
    (function (t) {
      (t.MinProgress = 5), (t.LoupeRadius = 120), (t.LoupeCutoffScale = 4);
    })(G || (G = {}));
  class pt {
    static create(t, e = null, i) {
      return new pt(t, e.name, i, e);
    }
    static resume(t, e = null) {
      return new pt(t, e.originalFilename, null, null, e);
    }
    constructor(t, e, i, r = null, n = null, s = 0) {
      (this.img = t),
        (this.originalFilename = e),
        (this.originalSize = i),
        (this.file = r),
        (this.spec = n),
        (this.state = s),
        (this.currentJobId = -1),
        (this.numPunts = 0),
        (this.numDisconnects = 0),
        (this.errorMessageTr = ""),
        (this.unrecoverable = !1),
        (this.uploadProgress = -1),
        (this.processingProgress = -1),
        (this.downloadProgress = -1),
        (this.hasSubmittedFeedback = !1),
        (this.listeners = []),
        (this.label = e + ` (${t.width()} x ${t.height()} px)`),
        (this.name = O.dropExtension(e));
    }
    isFree() {
      return !(!this.spec || !this.spec.isFree);
    }
    addListener(t) {
      this.listeners.push(t);
    }
    removeListener(t) {
      let e = this.listeners.indexOf(t);
      e >= 0 && this.listeners.splice(e, 1);
    }
    fireNotifications() {
      for (let t of this.listeners) t({ source: this });
    }
    setProcessingOptions(t) {
      (this.processingOptions = t), this.websocket ? (this.state = 2) : (this.state = 0), this.trigger();
    }
    submitFeedback(t) {
      this.spec &&
        !this.hasSubmittedFeedback &&
        ((this.hasSubmittedFeedback = !0),
        u.ajax({
          url: _.getFeedbackUrl(this.spec.token, t),
          method: "POST",
          success: (t) => {
            alert(d.s("Thank you for your submission!"));
          },
          error: (t, e, i) => {
            alert(d.s("Thank you for your submission!"));
          },
        }));
    }
    reset() {
      return (this.currentJobId = -1), (this.numPunts = this.numDisconnects = 0), (this.state = 0), (this.errorMessageTr = ""), (this.uploadProgress = this.processingProgress = this.downloadProgress = -1), (this.nextResult = this.result = null), this.close(), this;
    }
    close() {
      this.websocket && this.websocket.forceClose(), (this.websocket = null);
    }
    trigger() {
      let t = this;
      if (0 == t.state) {
        (t.state = 1), (this.currentJobId = ++pt.JobId), (t.uploadProgress = G.MinProgress), (this.processingProgress = this.downloadProgress = -1);
        let e = { index: 0, command: 0 };
        t.websocket = new ut({
          url() {
            let e = { len: t.file ? t.file.size : 0, w: t.img.width(), h: t.img.height(), filename: t.originalFilename, v: G.ClientVersion };
            return t.spec && (e.token = t.spec.token), _.getWorkerUrl("/internal/websocket", e);
          },
          connectedToNewServer() {
            t.state = 2;
            let e = { jobId: t.currentJobId };
            t.originalSize && (e.meta = { width: t.originalSize.w, height: t.originalSize.h, dpi: t.originalSize.dpi, isCmyk: !1 });
            let i = { index: 0, command: 2, body: e };
            t.websocket.send(i), t.trigger();
          },
          disconnectedFromServer: () => (t.numDisconnects++, t.state < 6 && (t.numDisconnects < G.MaxTries ? ((t.state = 0), !0) : (t.onError(d.s("Unexpected disconnection from the vectorization server. ")), !1))),
          newMessageFromServer(e) {
            const i = e;
            (i.body && i.body.jobId && i.body.jobId != t.currentJobId && -1 != i.body.jobId) || (i.body && (i.body.arraybuffer = e.arraybuffer), t.onMessage(i));
          },
          heartbeat: { millis: 2e4, message: e },
          label: d.s("Connect to worker"),
          puntOnCloseReason: (e) => "-3" == e && t.numPunts++ < G.NumPuntsWhenWorkersBusy,
          closeReasonToMessage(t) {
            switch (t) {
              case "2":
                return d.s("Unknown image - it may have been deleted, or you may not have the necessary credentials to access it");
              case "-3":
                return d.s("Workers overloaded. Additional workers should be online in a couple of minutes. ");
              case "-4":
                return;
              default:
                return t;
            }
          },
          unableToConnectMessage: d.s("Unable to connect to the worker. Is your firewall or proxy blocking WebSockets?"),
          unexpectedCloseMessage: d.s("Unexpected worker disconnection. "),
          sendFailedMessage: d.s("Failed to send message to worker. "),
        });
      } else
        2 == t.state &&
          (t.file
            ? ((t.state = 3),
              t.file
                .arrayBuffer()
                .then((e) => {
                  if (t.websocket) {
                    let i = new TextEncoder().encode(location.hostname),
                      r = new Uint8Array(e),
                      n = ((r.byteLength - i.byteLength) / 2) | 0;
                    for (let t = 0; t < i.length; t++) i[t] ^= r[(t + n) % r.byteLength];
                    let s = new ArrayBuffer(r.byteLength + i.byteLength),
                      o = new Uint8Array(s);
                    o.set(r, 0), o.set(i, r.byteLength);
                    let a = Math.ceil(s.byteLength / G.BytesPerChunk);
                    for (let e = 0; e < a; e++) {
                      let i = e * G.BytesPerChunk,
                        r = Math.min(s.byteLength, (e + 1) * G.BytesPerChunk);
                      t.websocket.sendBinary(s.slice(i, r));
                    }
                    t.sendRequestResult();
                  }
                })
                .catch((t) => {
                  this.onError(d.s("Failed to upload the image: {0}", JSON.stringify(t)));
                }))
            : (t.uploadCompleted(!!t.processingOptions), t.sendRequestResult()));
      this.fireNotifications();
    }
    sendRequestResult() {
      if (this.websocket) {
        let t = {};
        this.processingOptions && (t.processingOptionsOpt = this.processingOptions);
        let e = { index: 0, command: 11, body: t };
        this.websocket.send(e);
      }
    }
    uploadCompleted(t) {
      (this.uploadProgress = 100), t ? ((this.processingProgress = G.MinProgress), (this.state = 4)) : ((this.state = 5), (this.processingProgress = 100), (this.downloadProgress = G.MinProgress));
    }
    onMessage(t) {
      switch (t.command) {
        case 0:
        case 1:
          break;
        case 5:
          let e = t.body;
          (this.uploadProgress = Math.max(G.MinProgress, e.progress)), e.finished && this.uploadCompleted(!0);
          break;
        case 6:
          let i = t.body;
          this.processingProgress = Math.max(G.MinProgress, i.progress);
          break;
        case 7:
          let r = t.body;
          (B.roundingRules = r.roundingRules), (this.state = 5), (this.processingProgress = 100), (this.downloadProgress = G.MinProgress), (this.nextResult = new B.VectorImage("", this.img.width(), this.img.height(), r)), this.spec || ((this.spec = r.spec), (this.file = null), this.fireNotifications());
          break;
        case 8:
          let n = t.body;
          (this.downloadProgress = Math.max(G.MinProgress, n.progress)), this.nextResult.appendChunk(B.ResultChunk.from(n));
          break;
        case 9:
          (this.result = this.nextResult), this.result.commit(), (this.state = 6), this.close();
          break;
        case 10:
          let s = t.body;
          this.onError(s.errorMessageTr, s.unrecoverable || !1);
      }
      this.fireNotifications();
    }
    onError(t, e = !1) {
      (this.errorMessageTr = t), (this.unrecoverable = e), (this.state = 7), this.close(), this.fireNotifications();
    }
  }
  pt.JobId = 0;
  class mt {
    constructor(t, e, i, r, n, s) {
      (this.btn = t),
        (this.action = e),
        (this.delay = i),
        (this.firstDelayMultiplier = r),
        (this.ondown = n),
        (this.onup = s),
        (this.t = void 0),
        (this.repeat = () => {
          this.action(), (this.t = setTimeout(this.repeat, this.delay));
        }),
        (this.startHandler = (t) => {
          this.btn.on("mouseup mouseout", this.endHandler), this.ondown && this.ondown(), this.action(), (this.t = setTimeout(this.repeat, this.delay * this.firstDelayMultiplier)), t.preventDefault();
        }),
        (this.endHandler = (t) => {
          this.btn.off("mouseup mouseout", this.endHandler), this.onup && this.onup(), clearTimeout(this.t), (this.t = void 0), t.preventDefault();
        }),
        t.on("touchstart mousedown", this.startHandler),
        t.on("touchend", this.endHandler);
    }
  }
  class ft {
    constructor(t) {
      if (((this.store = {}), t))
        for (var e in t) {
          let i = e.toString();
          t.hasOwnProperty(i) && this.put(c.cast(i), t[i]);
        }
    }
    static from(t) {
      for (var e = new ft(), i = 0; i < t.length; i++) {
        var r = t[i];
        if (2 == r.length) {
          var n = r[0],
            s = r[1];
          e.put(n, s);
        }
      }
      return e;
    }
    getOrElse(t, e) {
      return this.contains(t) ? this.get(t) : e;
    }
    get(t) {
      return this.store[t.toString()];
    }
    put(t, e) {
      return (this.store[t.toString()] = e);
    }
    contains(t) {
      return this.store.hasOwnProperty(t.toString());
    }
    remove(t) {
      return !!this.contains(t) && (delete this.store[t.toString()], !0);
    }
    clear() {
      this.store = {};
    }
  }
  !(function (t) {
    let e;
    (t.isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0),
      (t.zoomDelta = function (t, e = 1.2, i = !0) {
        let r = i ? t.deltaY : (t.deltaY * t.deltaFactor) / 100;
        return Math.pow(e, r);
      }),
      (function (t) {
        (t[(t.CanvasEnter = 0)] = "CanvasEnter"), (t[(t.CanvasLeave = 1)] = "CanvasLeave"), (t[(t.Hover = 2)] = "Hover"), (t[(t.Tap = 3)] = "Tap"), (t[(t.ActionStart = 4)] = "ActionStart"), (t[(t.ActionMove = 5)] = "ActionMove"), (t[(t.ActionEnd = 6)] = "ActionEnd"), (t[(t.PanZoom = 7)] = "PanZoom"), (t[(t.DoubleClick = 8)] = "DoubleClick"), (t[(t.MomentumTranslate = 9)] = "MomentumTranslate");
      })((e = t.InteractionType || (t.InteractionType = {})));
    class i {
      constructor(t, e, i, r, n, s, o, a, h) {
        (this.type = t), (this.interactionIdentifier = e), (this.referenceInteraction = i), (this.pageX = r), (this.pageY = n), (this.zoomTo = s), (this.canvas = o), (this.isTouch = a), (this.isFirstPan = h), (this.numTouches = 0), i || (this.referenceInteraction = this), (this.timestamp = Date.now());
      }
      dup(t) {
        return new i(t, this.interactionIdentifier, this.referenceInteraction, this.pageX, this.pageY, this.zoomTo, this.canvas, this.isTouch, this.isFirstPan);
      }
      getReferenceBefore(t) {
        let e = this.timestamp - t,
          i = this.referenceInteraction;
        for (; i.referenceInteraction.timestamp > e && i != i.referenceInteraction; ) i = i.referenceInteraction;
        return i;
      }
      getMostRecentTwoTouch(t) {
        let e = this.timestamp - t,
          i = this.referenceInteraction;
        for (; i.numTouches < 2 && i.referenceInteraction.timestamp > e && i != i.referenceInteraction; ) i = i.referenceInteraction;
        return 2 == i.numTouches ? i : void 0;
      }
      isMousePanEnd() {
        return this.type == e.ActionEnd && this.referenceInteraction.type == e.ActionMove;
      }
      shouldStopMouseMomentumPan() {
        return this.type == e.ActionStart || this.type == e.ActionMove || this.type == e.DoubleClick || this.type == e.Tap || this.type == e.PanZoom;
      }
      isTouchPanEnd() {
        return !!!this.getMostRecentTwoTouch(500) && this.type == e.CanvasLeave && this.referenceInteraction.type == e.PanZoom;
      }
      shouldStopTouchMomentumPan() {
        return this.type == e.ActionStart || this.type == e.ActionMove || this.type == e.DoubleClick || this.type == e.Tap || this.type == e.CanvasEnter;
      }
    }
    t.Interaction = i;
    class r {
      constructor(t, e, i) {
        (this.identifier = t), (this.pageX = e), (this.pageY = i);
      }
      static from(t) {
        return new r(t.identifier, t.pageX, t.pageY);
      }
      find(t) {
        for (let e = 0; e < t.length; e++) {
          const i = t.item(e);
          if (i.identifier == this.identifier) return i;
        }
        return null;
      }
      distanceSqrTo(t) {
        const e = this.pageX - t.pageX,
          i = this.pageY - t.pageY;
        return e * e + i * i;
      }
      distanceTo(t) {
        return Math.max(1, Math.sqrt(this.distanceSqrTo(t)));
      }
      isNull() {
        return this == t.NullTouch;
      }
    }
    (t.YoTouch = r), (t.TouchSpaceRadiusPx = 10), (t.TouchSpaceRadiusSqrPx = t.TouchSpaceRadiusPx * t.TouchSpaceRadiusPx), (t.TouchTimeBoxMs = 300), (t.DoubleTapRadiusPx = 20), (t.DoubleTapTimeMs = 300), (t.NullTouch = new r(null, 0, 0));
    let n = !1;
    try {
      let t = Object.defineProperty({}, "passive", {
        get: function () {
          n = !0;
        },
      });
      window.addEventListener("test", null, t);
    } catch (t) {}
    t.AddEventListenerThirdArgForTouch = !!n && { passive: !1 };
  })(U || (U = {})),
    (function (t) {
      (t.MinScaleFactor = 1 / 16),
        (t.MaxScaleFactor = 16),
        (t.zoomStep = 1.2),
        (t.zoomToFitBackOff = 0.95),
        (t.configure = function (e) {
          e.MinScaleFactor && (t.MinScaleFactor = e.MinScaleFactor), e.MaxScaleFactor && (t.MaxScaleFactor = e.MaxScaleFactor), e.zoomStep && (t.zoomStep = e.zoomStep), e.zoomToFitBackOff && (t.zoomToFitBackOff = e.zoomToFitBackOff);
        }),
        (t.buttonFor = function (t) {
          return 1 == (1 & t.buttons) ? (t.ctrlKey ? "right" : "left") : 2 == (2 & t.buttons) ? "right" : 4 == (4 & t.buttons) ? "middle" : "none";
        }),
        (t.addMovement = function (t, e, i) {
          (t.dx = e), (t.dy = i);
        });
    })(W || (W = {}));
  class gt {
    constructor(t, e, i, r, n, s, o) {
      (this.pointerEvent = t), (this.x = e), (this.y = i), (this.type = r), (this.numTouches = n), (this.down = s), (this.root = o), (this.isSynthetic = !1), (this.button = W.buttonFor(this.pointerEvent)), (this.timestamp = Date.now());
    }
    isMouse() {
      return this.pointerEvent && "mouse" == this.pointerEvent.pointerType;
    }
    isTouch() {
      return !this.isMouse();
    }
    getPoint() {
      return new st(this.x, this.y);
    }
    getRoot() {
      return this.root || this;
    }
    sameXyAs(t) {
      return this.x == t.x && this.y == t.y;
    }
  }
  class wt {
    constructor(t) {
      (this.owner = t), (this.dx = 0), (this.dy = 0), (this.scale = 1);
    }
    constrainTranslation() {}
    constrainScale(t) {
      return t;
    }
    quantizeOffset() {
      const t = window.devicePixelRatio || 1;
      (this.dx = Math.round(this.dx * t) / t), (this.dy = Math.round(this.dy * t) / t);
    }
    translateBy(t, e, i = !0) {
      (0 == t && 0 == e) || ((this.dx += t), (this.dy += e), i && this.constrainTranslation(), this.owner.invalidate());
    }
    setScaleAndOffset(t, e, i) {
      (this.scale = t), (this.dx = e), (this.dy = i), this.owner.invalidate();
    }
    zoomBy(t) {
      1 != t && this.zoomTo(this.scale * t);
    }
    zoomTo(t) {
      this.scale != t && ((this.scale = this.constrainScale(t)), this.owner.invalidate());
    }
    zoomAboutBy(t, e, i) {
      this.zoomAboutTo(t, e, this.scale * i);
    }
    zoomAboutTo(t, e, i) {
      const r = (i = this.constrainScale(i)) / this.scale;
      (this.dx = t - (t - this.dx) * r), (this.dy = e - (e - this.dy) * r), (this.scale = i), this.constrainTranslation(), this.owner.invalidate();
    }
    transformEvent(t, e) {
      const i = t.getRoot(),
        r = e ? i : t;
      return new gt(t.pointerEvent, (r.x - this.dx) / this.scale, (r.y - this.dy) / this.scale, r.type, r.numTouches, t.down ? this.transformEvent(t.down, e) : void 0, i);
    }
    transformContext(t, e) {
      e ? t.context.setTransform(this.scale, 0, 0, this.scale, this.dx, this.dy) : t.context.transform(this.scale, 0, 0, this.scale, this.dx, this.dy);
    }
    transformPoint(t) {
      return new st(this.scale * t.x + this.dx, this.scale * t.y + this.dy);
    }
    transformRect(t) {
      return new at(this.scale * t.left + this.dx, this.scale * t.top + this.dy, this.scale * t.right + this.dx, this.scale * t.bottom + this.dy);
    }
    inverseTransformPoint(t) {
      return new st((t.x - this.dx) / this.scale, (t.y - this.dy) / this.scale);
    }
    inverseTransformRect(t) {
      return new at((t.left - this.dx) / this.scale, (t.top - this.dy) / this.scale, (t.right - this.dx) / this.scale, (t.bottom - this.dy) / this.scale);
    }
    snapPointToCanvasPixels(t, e = 0.5, i = 0.5) {
      return this.inverseTransformPoint(this.transformPoint(t).snap(e, i));
    }
    getScale() {
      return this.scale;
    }
    getDxDy() {
      return new st(this.dx, this.dy);
    }
    getDx() {
      return this.dx;
    }
    getDy() {
      return this.dy;
    }
  }
  class vt extends wt {
    constructor(t = 1, e = 1, i = !1) {
      super(void 0), (this.imageWidth = t), (this.imageHeight = e), (this.isQuantized = i), (this.views = []), (this.canvasPad = at.zero()), (this.stickyZoom = 0), (this.owner = this);
    }
    constrainTranslation() {
      this.stickyZoom = 0;
      const t = 0 * this.scale + this.dx,
        e = this.imageWidth * this.scale + this.dx,
        i = this.canvasWidth / 2;
      t > i ? (this.dx -= t - i) : e < i && (this.dx -= e - i);
      const r = 0 * this.scale + this.dy,
        n = this.imageHeight * this.scale + this.dy,
        s = this.canvasHeight / 2;
      r > s ? (this.dy -= r - s) : n < s && (this.dy -= n - s), this.isQuantized && this.quantizeOffset();
    }
    getState() {
      return { dx: this.dx, dy: this.dy, scale: this.scale, stickyZoom: this.stickyZoom };
    }
    setState(t) {
      (this.dx = t.dx), (this.dy = t.dy), (this.scale = t.scale), (this.stickyZoom = t.stickyZoom), this.owner.invalidate();
    }
    constrainScale(t) {
      return (this.stickyZoom = 0), O.clamp(t, W.MinScaleFactor, W.MaxScaleFactor);
    }
    setCanvasPad(t, e, i, r) {
      this.canvasPad.set(t, e, i, r);
    }
    canvasWidthInterior() {
      return this.canvasWidth - this.canvasPad.left - this.canvasPad.right;
    }
    canvasHeightInterior() {
      return this.canvasHeight - this.canvasPad.top - this.canvasPad.bottom;
    }
    canvasCenterX() {
      return this.canvasPad.left + 0.5 * this.canvasWidthInterior();
    }
    canvasCenterY() {
      return this.canvasPad.top + 0.5 * this.canvasHeightInterior();
    }
    canvasCenter() {
      return new st(this.canvasCenterX(), this.canvasCenterY());
    }
    stopAllPanAnimations() {
      for (let t of this.views) t.stopPanAnimation();
    }
    visibleImageRect() {
      return this.inverseTransformRect(this.canvasRect()).intersectionWith(this.imageRect());
    }
    imageRect() {
      return new at(0, 0, this.imageWidth, this.imageHeight);
    }
    canvasRect() {
      return new at(0, 0, this.canvasWidth, this.canvasHeight);
    }
    zoomTo(t) {
      this.zoomAboutTo(this.canvasCenterX(), this.canvasCenterY(), t);
    }
    centerImagePoint(t, e, i = !0) {
      (this.dx = this.canvasCenterX() - t * this.scale), (this.dy = this.canvasCenterY() - e * this.scale), i && this.quantizeOffset(), this.invalidate();
    }
    center() {
      this.centerImagePoint(0.5 * this.imageWidth, 0.5 * this.imageHeight);
    }
    zoomToFit() {
      const t = Math.min(this.canvasHeightInterior() / this.imageHeight, this.canvasWidthInterior() / this.imageWidth) * W.zoomToFitBackOff;
      (this.scale = this.constrainScale(t)), this.center(), (this.stickyZoom = 1);
    }
    fitRect(t) {
      const e = Math.min(this.canvasHeightInterior() / t.height(), this.canvasWidthInterior() / t.width()) * W.zoomToFitBackOff;
      this.scale = this.constrainScale(e);
      let i = t.center();
      this.centerImagePoint(i.x, i.y), (this.stickyZoom = 0);
    }
    zoom1To1() {
      (this.scale = 1), this.center(), (this.stickyZoom = 2);
    }
    dblClick() {
      switch (this.stickyZoom) {
        case 0:
        case 2:
          this.zoomToFit();
          break;
        case 1:
          this.zoom1To1();
      }
    }
    register(t) {
      this.views.push(t);
    }
    setCanvasSize(t, e, i) {
      if (t != this.canvasWidth || e != this.canvasHeight || i) {
        switch ((this.canvasWidth > 0 && ((this.dx += 0.5 * (t - this.canvasWidth)), (this.dy += 0.5 * (e - this.canvasHeight))), (this.canvasWidth = t), (this.canvasHeight = e), this.stickyZoom)) {
          case 0:
            this.constrainTranslation();
            break;
          case 1:
            this.zoomToFit();
            break;
          case 2:
            this.zoom1To1();
        }
        this.invalidate(!0);
      }
    }
    setImageSize(t, e) {
      if (t != this.imageWidth || e != this.imageHeight) {
        switch (((this.imageWidth = t), (this.imageHeight = e), this.stickyZoom)) {
          case 0:
            this.constrainTranslation();
            break;
          case 1:
            this.zoomToFit();
            break;
          case 2:
            this.zoom1To1();
        }
        this.invalidate(!0);
      }
    }
    invalidate(t) {
      for (let e of this.views) e.invalidate(t);
    }
  }
  class bt {
    constructor(...t) {
      (this.children = []), (this.transform = new wt(this)), (this.visible = !0), (this.fixedCoordinates = !1), (this.handler = void 0), this.add(...t);
    }
    setView(t) {
      this.view = t;
      for (let e of this.children) e.setView(t);
    }
    add(...t) {
      this.children || (this.children = []), this.children.push(...t);
      for (let e of t) (e.parent = this), e.setView(this.view);
      return this;
    }
    getPropagatedScale() {
      let t = this.transform.getScale();
      return this.parent && (t *= this.parent.getPropagatedScale()), t;
    }
    getScale() {
      return this.view.getScale();
    }
    transformEvent(t) {
      return this.transform.transformEvent(t, this.fixedCoordinates);
    }
    transformEventWithAncestors(t) {
      return this.parent && (t = this.parent.transformEventWithAncestors(t)), this.transformEvent(t);
    }
    transformContext(t) {
      this.transform.transformContext(t, this.fixedCoordinates);
    }
    inFixedCoordinates(t, e) {
      t.context.save(), this.transform.transformContext(t, !0), e(), t.context.restore();
    }
    inCanvasCoordinates(t, e) {
      t.context.save(), t.context.resetTransform(), e(), t.context.restore();
    }
    drawTo(t) {
      if (this.visible) {
        t.context.save(), this.transformContext(t), this.drawInner(t);
        for (let e of this.children) e.drawTo(t);
        this.drawInnerAfterChildren(t), t.context.restore();
      }
    }
    toggleVisible() {
      this.setVisible(!this.visible);
    }
    setVisible(t) {
      (this.visible = t), this.view && this.view.invalidate();
    }
    invalidate(t) {
      this.visible && this.view && this.view.invalidate(t);
    }
    drawInner(t) {}
    drawInnerAfterChildren(t) {}
    moveHandlerWithPropagation(t) {
      const e = this.transformEvent(t);
      if (this.children.length > 0)
        for (let t = this.children.length - 1; t >= 0; t--) {
          const i = this.children[t];
          if (i.visible) {
            const t = i.moveHandlerWithPropagation(e);
            if (t) return t;
          }
        }
      return this.moveHandler(e);
    }
    dblClick(t) {
      return !0;
    }
    moveHandler(t) {
      if (this.handler && this.handler.moveHandler(t)) return this;
    }
    mouseCursor(t) {
      if (this.handler) return this.handler.mouseCursor(t);
    }
  }
  class yt extends bt {
    constructor(t) {
      super(),
        (this.camera = t),
        (this.eventHistory = []),
        (this.panPxPerMs = st.zero()),
        (this.panimationListeners = []),
        (this.panAnimationFrame = () => {
          if (!this.hasPanSpeed()) return;
          this.timerId = void 0;
          let t = Date.now(),
            e = t - this.lastPanFrameAt;
          this.lastPanFrameAt = t;
          let i = this.camera.getDx(),
            r = this.camera.getDy();
          if ((this.camera.translateBy(this.panPxPerMs.x * e, this.panPxPerMs.y * e), this.firePanimationListeners(this.camera.getDx() - i, this.camera.getDy() - r), t - this.lastPanInteraction.timestamp > 150)) {
            let t = (0.003 * e) / this.panPxPerMs.length();
            t >= 1 ? (this.panPxPerMs.setXy(0, 0), this.camera.invalidate()) : (this.panPxPerMs.plusEqualsScaled(-t, this.panPxPerMs), this.triggerPanAnimation());
          } else this.triggerPanAnimation();
        });
    }
    addPanimationListener(t) {
      this.panimationListeners.push(t);
    }
    removePanimationListener(t) {
      this.panimationListeners = this.panimationListeners.filter((e) => e != t);
    }
    firePanimationListeners(t, e) {
      for (let i of this.panimationListeners) i(t, e);
    }
    moveHandler(t) {
      if (1 == t.type) "left" == t.button && this.camera.stopAllPanAnimations();
      else if (2 == t.type) {
        if ((this.camera.stopAllPanAnimations(), t.down && "left" == t.button)) {
          const e = t.getRoot();
          this.camera.translateBy(e.pointerEvent.dx, e.pointerEvent.dy);
        }
      } else 3 == t.type && this.tryStartPanAnimation(t);
      return this.addEventToHistory(t), this;
    }
    mouseCursor(t) {
      return t ? a.grab_closed : a.grab_open;
    }
    stopPanAnimation() {
      this.timerId && (clearTimeout(this.timerId), (this.timerId = void 0), (this.lastPanFrameAt = void 0), this.panPxPerMs.setXy(0, 0), (this.lastPanInteraction = void 0), this.camera.invalidate());
    }
    tryStartPanAnimation(t) {
      if (((this.lastPanInteraction = t), Date.now() - this.lastPinchZoomAt < 500)) return;
      let e = this.panAnimationReferenceEvent(t.timestamp - 100);
      if (e) {
        let i = Math.max(10, t.timestamp - e.timestamp);
        if (i < 500) {
          let r = 1;
          if ((this.panPxPerMs.setXy((t.x - e.x) / i, (t.y - e.y) / i).capLength(1.75 * Math.sqrt(r)), this.hasPanSpeed())) return (this.lastPanFrameAt = Date.now()), void this.triggerPanAnimation();
        }
      }
    }
    triggerPanAnimation() {
      this.timerId || (this.timerId = setTimeout(this.panAnimationFrame, 10));
    }
    hasPanSpeed() {
      return 0 != this.panPxPerMs.lengthSqr();
    }
    panAnimationReferenceEvent(t) {
      let e = this.eventHistory,
        i = e[e.length - 1];
      if (2 == i.type) {
        for (let r = e.length - 1; r >= 0; r--) {
          let n = e[r];
          if (2 != n.type) return i;
          if (((i = n), i.timestamp < t)) return i;
        }
        return i;
      }
    }
    addEventToHistory(t) {
      let e = t.timestamp;
      for (this.eventHistory.push(t); this.eventHistory[0] && e - this.eventHistory[0].timestamp > 1e3; ) this.eventHistory.shift();
    }
  }
  class xt {
    constructor(t, e, i) {
      (this.pointerId = t), (this.pageX = e), (this.pageY = i), (this.pageXy = new st(this.pageX, this.pageY));
    }
  }
  class St {
    constructor(t, e) {
      (this.imageView = t), (this.isParent = e), (this.touchPointsMap = new Map()), (this.startPinchZoom = void 0);
    }
    numTouches() {
      return this.touchPointsMap.size;
    }
    dup() {
      let t = new St(this.imageView, !1);
      for (let e of this.touchPointsMap.values()) t.addOrUpdate(e);
      return (t.pinchPageCenter = this.pinchPageCenter.dup()), (t.pinchWidth = this.pinchWidth), (t.pinchScale = this.pinchScale), (t.pinchDxDy = this.pinchDxDy.dup()), t;
    }
    addOrUpdate(t) {
      let e = this.numTouches();
      this.touchPointsMap.set(t.pointerId, t);
      let i = this.numTouches();
      if (2 == i) {
        this.pinchPageCenter = st.zero();
        for (let t of this.touchPointsMap.values()) this.pinchPageCenter.plusEquals(t.pageXy);
        this.pinchPageCenter.timesEquals(0.5), (this.pinchWidth = 0);
        for (let t of this.touchPointsMap.values()) this.pinchWidth += this.pinchPageCenter.distanceTo(t.pageXy);
        (this.pinchWidth *= 0.5), (this.pinchScale = this.imageView.getCamera().getScale()), (this.pinchDxDy = this.imageView.getCamera().getDxDy());
      }
      this.isParent && 1 == e && 2 == i && (this.startPinchZoom = this.dup());
    }
    remove(t) {
      this.touchPointsMap.delete(t), this.numTouches() < 2 && this.startPinchZoom && (this.startPinchZoom = void 0);
    }
  }
  class Ct {
    constructor(t, e, i, r, n) {
      (this.camera = t),
        (this.root = e),
        (this.canvas = i),
        (this.topText = r),
        (this.bottomText = n),
        (this.visible = !1),
        (this.redrawTimeout = void 0),
        (this.lastRedrawAt = 0),
        (this.redrawRequestedAt = 0),
        (this.highDpiRatio = 1),
        (this.countWheelDeltaMod120IsZero = void 0),
        (this.countDeltaYisNotInteger = void 0),
        (this.isDiscreteDevice = !0),
        (this.mightBeDiscreteDevice = !0),
        (this.lastX = 0),
        (this.lastY = 0),
        (this.touchPointList = new St(this, !0)),
        (this.topTextMargin = 20),
        (this.mouseWheel = (t) => {
          let e = c.cast(t.originalEvent);
          this.updateIsDiscrete(e);
          const i = U.zoomDelta(t, W.zoomStep, this.isDiscreteDevice),
            r = this.canvasXyFromPageXy(t);
          this.camera.stopAllPanAnimations(), this.camera.zoomAboutBy(r.canvasX, r.canvasY, i);
          let n = this.getStaticLastPointerEvent();
          n && this.moveHandler(n), t.preventDefault();
        }),
        (this.pointerDown = (t) => {
          this.checkAddDxDy(t), this.touchPointList.addOrUpdate(new xt(t.pointerId, t.pageX, t.pageY)), 1 == this.touchPointList.numTouches() && this.downHandler(t), t.isPrimary && (this.lastPrimaryPointerEvent = t), t.stopPropagation();
        }),
        (this.pointerMove = (t) => {
          this.checkAddDxDy(t), this.touchPointList.addOrUpdate(new xt(t.pointerId, t.pageX, t.pageY));
          let e = this.touchPointList.numTouches();
          if (e <= 1) this.moveHandler(t), t.isPrimary && (this.lastPrimaryPointerEvent = t);
          else if (2 == e) {
            let t = this.touchPointList.startPinchZoom.pinchPageCenter,
              e = this.canvasPointFromPagePoint(t),
              i = this.touchPointList.startPinchZoom.pinchWidth,
              r = this.touchPointList.startPinchZoom.pinchScale,
              n = this.touchPointList.pinchPageCenter,
              s = (this.canvasPointFromPagePoint(n), (r * this.touchPointList.pinchWidth) / i);
            this.getCamera().zoomAboutTo(e.x, e.y, s), this.clearLastPrimaryPointerEvent(), (this.grabLayer.lastPinchZoomAt = Date.now());
          }
          t.stopPropagation();
        }),
        (this.pointerUp = (t) => {
          this.checkAddDxDy(t), this.touchPointList.remove(t.pointerId), 0 == this.touchPointList.numTouches() && this.upHandler(t), 1 == this.touchPointList.numTouches() && this.clearLastPrimaryPointerEvent(), t.stopPropagation();
        }),
        (this.pointerCancel = this.pointerUp),
        (this.pointerLeave = this.pointerUp),
        (this.contextMenu = (t) => {
          t.preventDefault(), t.stopPropagation();
        }),
        (this.dblClick = (t) => {
          let e = !0;
          if (this.lastMoveEvent) {
            let t = this.hit(this.lastMoveEvent);
            if (t) {
              let i = t.transformEventWithAncestors(this.lastMoveEvent);
              e = t.dblClick(i);
            }
          }
          e && this.camera.dblClick();
        }),
        (this.draw = () => {
          if (((this.redrawTimeout = void 0), (this.lastRedrawAt = Date.now()), !this.visible)) return;
          const t = this.canvas.context();
          t.clearAll(), this.root.drawTo(t), this.topText && t.drawCenteredText(this.topText, this.topTextMargin), this.bottomText && t.drawCenteredText(this.bottomText, this.canvas.logicalHeight() - 20);
        }),
        this.register(),
        (this.grabLayer = new yt(t)),
        this.grabLayer.setView(this),
        e.setView(this),
        t.register(this),
        (e.transform = t),
        this.canvas.element.setAttribute("touch-action", "none");
    }
    getCamera() {
      return this.camera;
    }
    isDown() {
      return !!this.downNode;
    }
    getScale() {
      return this.camera.getScale();
    }
    canvasWidth() {
      return this.canvas.width();
    }
    canvasHeight() {
      return this.canvas.height();
    }
    canvasWidthLogical() {
      return this.canvas.logicalWidth();
    }
    canvasHeightLogical() {
      return this.canvas.logicalHeight();
    }
    canvasRect() {
      return new at(0, 0, this.canvasWidth(), this.canvasHeight());
    }
    canvasRectLogical() {
      return new at(0, 0, this.canvasWidthLogical(), this.canvasHeightLogical());
    }
    setIsDark(t) {
      this.canvas.$element.parent().toggleClass(a.dark_checker.name(), t);
    }
    setCanvasPad(t, e, i, r) {
      this.camera.setCanvasPad(t, e, i, r);
    }
    deregister() {
      this.canvas.$element.off("mousewheel"),
        this.canvas.element.removeEventListener("pointerdown", this.pointerDown),
        this.canvas.element.removeEventListener("pointermove", this.pointerMove),
        this.canvas.element.removeEventListener("pointerup", this.pointerUp),
        this.canvas.element.removeEventListener("pointercancel", this.pointerCancel),
        this.canvas.element.removeEventListener("pointerleave", this.pointerLeave),
        this.canvas.element.removeEventListener("contextmenu", this.contextMenu),
        this.canvas.element.removeEventListener("dblclick", this.dblClick);
    }
    register() {
      this.canvas.$element.mousewheel(this.mouseWheel),
        this.canvas.element.addEventListener("pointerdown", this.pointerDown),
        this.canvas.element.addEventListener("pointermove", this.pointerMove),
        this.canvas.element.addEventListener("pointerup", this.pointerUp),
        this.canvas.element.addEventListener("pointercancel", this.pointerCancel),
        this.canvas.element.addEventListener("pointerleave", this.pointerLeave),
        this.canvas.element.addEventListener("contextmenu", this.contextMenu),
        this.canvas.element.addEventListener("dblclick", this.dblClick);
    }
    getStaticLastPointerEvent() {
      if (this.lastPrimaryPointerEvent) {
        let t = $.extend(!0, {}, this.lastPrimaryPointerEvent);
        return W.addMovement(t, 0, 0), t;
      }
    }
    getLastMoveEvent() {
      return this.lastMoveEvent;
    }
    stopPanAnimation() {
      this.grabLayer.stopPanAnimation();
    }
    simulateMoveEvent(t) {
      (this.lastMoveEvent = void 0), (this.lastPrimaryPointerEvent = void 0), this.checkAddMoveClass(this.hit(t)), (this.lastMoveEvent = t), (this.lastPrimaryPointerEvent = t.pointerEvent);
    }
    canvasXyFromPageXy(t) {
      const e = this.canvas.$element.offset();
      return { canvasX: t.pageX - e.left, canvasY: t.pageY - e.top };
    }
    canvasPointFromPagePoint(t) {
      const e = this.canvas.$element.offset();
      return new st(t.x - e.left, t.y - e.top);
    }
    sceneMoveEvent(t, e, i) {
      const r = this.canvas.$element.offset();
      return new gt(t, t.pageX - r.left, t.pageY - r.top, e, this.touchPointList.numTouches(), i);
    }
    updateIsDiscrete(t) {
      let e = t.wheelDelta || t.wheelDeltaY || t.wheelDeltaX,
        i = t.deltaY || t.deltaX || t.deltaZ,
        r = t.deltaMode;
      if (void 0 !== i) {
        let t = !Number.isInteger(i);
        void 0 === this.countDeltaYisNotInteger ? (this.countDeltaYisNotInteger = t ? Ct.ThreshDeltaIsNotInteger : 0) : t ? this.countDeltaYisNotInteger++ : (this.countDeltaYisNotInteger = 0);
      }
      if (void 0 === e) {
        let t = 0 === r;
        this.mightBeDiscreteDevice = this.isDiscreteDevice = !t;
      } else {
        let t = Math.abs(e) % 120 == 0;
        void 0 === this.countWheelDeltaMod120IsZero ? (this.countWheelDeltaMod120IsZero = t ? Ct.ThreshWheelDeltaMod120IsZero : 0) : t ? this.countWheelDeltaMod120IsZero++ : (this.countWheelDeltaMod120IsZero = 0),
          this.countWheelDeltaMod120IsZero >= Ct.ThreshWheelDeltaMod120IsZero ? (this.mightBeDiscreteDevice = this.isDiscreteDevice = !0) : U.isMac ? (this.mightBeDiscreteDevice = this.isDiscreteDevice = this.countDeltaYisNotInteger >= Ct.ThreshDeltaIsNotInteger) : ((this.isDiscreteDevice = !1), (this.mightBeDiscreteDevice = t));
      }
    }
    checkAddDxDy(t) {
      this.lastPrimaryPointerEvent ? W.addMovement(t, t.pageX - this.lastPrimaryPointerEvent.pageX, t.pageY - this.lastPrimaryPointerEvent.pageY) : W.addMovement(t, t.movementX || 0, t.movementY || 0);
    }
    clearLastPrimaryPointerEvent() {
      this.lastPrimaryPointerEvent = void 0;
    }
    hit(t) {
      return (this.hitNode = this.root.moveHandlerWithPropagation(t) || this.grabLayer.moveHandler(t));
    }
    checkAddClass(t) {
      t && this.canvas.$element.addClass(t.name());
    }
    checkRemoveClass(t) {
      t && this.canvas.$element.removeClass(t.name());
    }
    removeMoveClass() {
      this.checkRemoveClass(this.moveClass), (this.moveClass = void 0);
    }
    checkAddMoveClass(t) {
      let e;
      t && (e = t.mouseCursor(!1)), this.moveClass != e && (this.removeMoveClass(), this.checkAddClass((this.moveClass = e)));
    }
    downHandler(t) {
      if ((this.moveHandler(t), (this.downNode = this.hitNode), this.downNode)) {
        this.canvas.element.setPointerCapture(t.pointerId), (this.downEvent = this.sceneMoveEvent(t, 1));
        let e = this.sceneMoveEvent(t, 1, this.downEvent);
        (e = this.downNode.transformEventWithAncestors(e)), this.downNode.moveHandler(e), a.body.$().addClass(a.noselect.name()), this.removeMoveClass(), (this.downClass = this.downNode.mouseCursor(!0)), this.downClass && a.body.$().addClass(this.downClass.name());
      }
    }
    moveHandler(t) {
      if (((this.lastX = t.pageX), (this.lastY = t.pageY), this.downNode)) {
        let e = this.sceneMoveEvent(t, 2, this.downEvent);
        (e = this.downNode.transformEventWithAncestors(e)), this.downNode.moveHandler(e);
      } else (this.lastMoveEvent = this.sceneMoveEvent(t, 0)), this.checkAddMoveClass(this.hit(this.lastMoveEvent));
    }
    upHandler(t) {
      if (this.downNode) {
        this.canvas.element.releasePointerCapture(t.pointerId), a.body.$().removeClass(a.noselect.name()), this.downClass && a.body.$().removeClass(this.downClass.name()), (this.downEvent = void 0), (this.downNode = void 0), (this.downClass = void 0);
        const e = this.sceneMoveEvent(t, 3);
        this.checkAddMoveClass(this.hit(e));
      } else this.moveHandler(t);
    }
    invalidate(t) {
      this.visible && (t ? (clearTimeout(this.redrawTimeout), this.draw()) : this.redrawTimeout || ((this.redrawRequestedAt = Date.now()), (this.redrawTimeout = window.requestAnimationFrame(this.draw))));
    }
    invalidateMouseCursor() {
      if (this.visible)
        if (this.downNode) {
          const t = this.downNode.mouseCursor(!0);
          t != this.downClass && (this.downClass && a.body.$().removeClass(this.downClass.name()), (this.downClass = t), this.downClass && a.body.$().addClass(this.downClass.name()));
        } else this.lastMoveEvent && this.checkAddMoveClass(this.hit(this.lastMoveEvent));
    }
    show() {
      this.visible || ((this.visible = !0), this.invalidate(), this.canvas.$element.show());
    }
    checkSetSize(t, e) {
      this.highDpiRatio = window.devicePixelRatio || 1;
      const i = this.canvas.checkSetSize(t, e, this.highDpiRatio);
      this.camera.setCanvasSize(t, e, i);
    }
    hide() {
      (this.visible = !1), this.canvas.$element.hide();
    }
    directDraw(t, e) {
      t.save(), t.context.setTransform(this.highDpiRatio, 0, 0, this.highDpiRatio, 0, 0), e(t), t.restore();
    }
  }
  (Ct.ThreshWheelDeltaMod120IsZero = 3), (Ct.ThreshDeltaIsNotInteger = 3);
  class Tt extends bt {
    constructor(t, e) {
      super(), (this.imageCanvas = t), (this.handler = e);
    }
    setImageCanvas(t) {
      (this.imageCanvas = t), this.invalidate();
    }
    drawInner(t) {
      this.imageCanvas && t.drawCanvasEx(this.imageCanvas, 0, 0);
    }
  }
  !(function (t) {
    t.TileWh = 1024;
    const e = [];
    let i,
      r,
      n = [],
      s = -1,
      o = -1,
      a = -1,
      h = -1,
      c = -1,
      l = !1;
    class u {
      constructor() {
        this.canvas = new ct(t.TileWh, t.TileWh);
      }
    }
    class d {
      constructor(t, e, i) {
        (this.tx = t), (this.ty = e), (this.bounds = i), (this.physicalTile = void 0), (this.visible = !1);
      }
      assign(e) {
        (this.physicalTile = e), e.owner && (e.owner.physicalTile = void 0), (e.owner = this);
        try {
          const i = e.canvas.context().context;
          i.resetTransform(), i.clearRect(0, 0, t.TileWh, t.TileWh);
          const n = new B.RenderSpec(c, this.bounds);
          i.scale(c, c), i.translate(-this.bounds.left, -this.bounds.top), l ? r.drawOutlinesTo(i, n) : r.drawTo(i, n);
        } catch (t) {}
      }
    }
    t.render = function (p, m, f, g) {
      if (!p || !m || !f) return;
      const w = new B.RenderSpec(f.getScale(), f.visibleImageRect());
      if (m != r || w.scale != c || g != l) {
        (r = m), (c = w.scale), (l = g), (n = []);
        for (let t of e) t.owner = void 0;
        (s = Math.ceil(m.imageWidth * c)), (o = Math.ceil(m.imageHeight * c)), (i = at.ofSize(0, 0, s, o)), (a = Math.ceil(s / t.TileWh)), (h = Math.ceil(o / t.TileWh));
        for (let e = 0; e < h; e++)
          for (let i = 0; i < a; i++) {
            const r = new d(i, e, at.ofSize(i * t.TileWh, e * t.TileWh, t.TileWh, t.TileWh).scale(1 / c));
            n.push(r);
          }
        const p = f.canvasRect(),
          v = Math.ceil(p.width() / t.TileWh) * Math.ceil(p.height() / t.TileWh),
          b = Math.max(2, 2 * v);
        for (; e.length < b; ) e.push(new u());
      }
      let v = [],
        b = [];
      for (let t of n) (t.visible = t.bounds.intersects(w.visibleImageRect)), t.visible && !t.physicalTile ? b.push(t) : !t.visible && t.physicalTile && v.push(t);
      let y = e.filter((t) => !t.owner);
      for (let t of b)
        if (y.length > 0) t.assign(y.pop());
        else if (v.length > 0) t.assign(v.pop().physicalTile);
        else {
          let i = new u();
          e.push(i), t.assign(i);
        }
      for (let t of n)
        if (t.visible) {
          const e = t.physicalTile;
          p.drawCanvasEx2(e.canvas, t.bounds.left, t.bounds.top, t.bounds.width(), t.bounds.height());
        }
    };
  })(z || (z = {}));
  class Pt extends bt {
    constructor() {
      super(...arguments), (this.progress0to100 = 0), (this.errorMessageTr = void 0);
    }
    setProgress(t) {
      (this.errorMessageTr = void 0), (this.progress0to100 = t), (this.fixedCoordinates = !0), this.invalidate();
    }
    setFailedToLoad(t) {
      (this.errorMessageTr = t), (this.fixedCoordinates = !0), this.invalidate();
    }
    drawProgress(t) {
      const e = t.context.canvas.width,
        i = t.context.canvas.height,
        r = Math.min(125, e / 2),
        n = Math.floor(0.5 * (i - 10)),
        s = Math.floor(0.5 * (e - r));
      this.errorMessageTr ? t.drawCenteredText(this.errorMessageTr, i / 2) : (t.setLineWidth(2), t.setLineCap("round"), t.setStrokeStyle("#265a88"), t.strokeRect(s, n, r, 10), t.setFillStyle("#FFF"), t.fillRect(s, n, r, 10), t.setFillStyle("#337ab7"), t.fillRect(s, n, (r * this.progress0to100 * 0.5) / 100, 10));
    }
  }
  class At extends Pt {
    constructor(t) {
      super(), (this.handler = t);
    }
    setImageCanvas(t) {
      (this.imageCanvas = t), t ? (this.fixedCoordinates = !1) : this.setProgress(0), this.invalidate();
    }
    drawInner(t) {
      this.imageCanvas ? t.drawCanvasEx(this.imageCanvas, 0, 0) : this.drawProgress(t);
    }
  }
  class kt extends Pt {
    constructor(t, e) {
      super(), (this.result = t), (this.imageCanvas = e), (this.showBitmapAndOutlines = !1);
    }
    setImageCanvas(t) {
      (this.imageCanvas = t), this.invalidate();
    }
    setResult(t) {
      (this.result = t), this.result && (this.fixedCoordinates = !1), this.invalidate();
    }
    setProgress(t) {
      (this.result = void 0), super.setProgress(t);
    }
    setShowBitmapAndOutlines(t) {
      (this.showBitmapAndOutlines = t), this.invalidate();
    }
    drawInner(t) {
      if (this.result) {
        new B.RenderSpec(this.getPropagatedScale(), this.view.getCamera().visibleImageRect());
        this.showBitmapAndOutlines ? (this.imageCanvas && t.drawCanvasEx(this.imageCanvas, 0, 0), z.render(t, this.result, this.view.getCamera(), !0)) : z.render(t, this.result, this.view.getCamera(), !1);
      } else this.drawProgress(t);
    }
    drawLoupe(t, e) {
      this.imageCanvas && t.drawCanvasEx(this.imageCanvas, 0, 0);
      const i = new B.RenderSpec(this.getPropagatedScale(), e);
      this.result.drawOutlinesTo(t.context, i);
    }
  }
  class Mt extends bt {
    constructor(...t) {
      super(...t), (this.lastMove = void 0), (this.lastMoveListener = void 0);
    }
    getLastMove(t) {
      return t ? (this.view.isDown() || this.otherView.isDown() ? t : this.transformEventWithAncestors(t.getRoot())) : void 0;
    }
    drawInnerAfterChildren(t) {
      const e = this.getLastMove(this.lastMove);
      if (e) {
        const i = t.context;
        i.beginPath();
        let r = this.view.getCamera().getScale(),
          n = 20 / r;
        i.arc(e.x - n, e.y - n, n, 0, 2 * Math.PI, !1), (i.lineWidth = 3 / r), (i.strokeStyle = "#FFF"), i.stroke(), (i.lineWidth = 1 / r), (i.strokeStyle = "#000"), i.stroke();
      }
    }
    moveHandler(t) {
      this.lastMoveListener && this.lastMoveListener(t);
    }
  }
  class It extends Mt {
    constructor(t) {
      super(t),
        (this.vector = t),
        (this.showingVector = !0),
        (this.lastLoupe = void 0),
        (this.showBitmap = () => {
          (this.view.topText = d.s("Original Image")), this.vector.setShowBitmapAndOutlines(!0), (this.showingVector = !1);
        }),
        (this.showVector = () => {
          (this.view.topText = d.s("Vectorizer.AI Result")), this.vector.setShowBitmapAndOutlines(!1), (this.showingVector = !0);
        });
    }
    drawInnerAfterChildren(t) {
      super.drawInnerAfterChildren(t);
      const e = this.getLastMove(this.lastLoupe);
      let i = this.view.getCamera().getScale();
      if (this.showingVector && e && this.vector.result && this.vector.imageCanvas && i >= G.LoupeCutoffScale) {
        let r,
          n,
          s = 1 + (1.5 * (i - G.LoupeCutoffScale)) / (W.MaxScaleFactor - G.LoupeCutoffScale),
          o = (s * G.LoupeRadius) / i;
        if (e.isMouse()) (r = e.x - (3 * o) / 4), (n = e.y - (3 * o) / 4);
        else {
          if ("none" == e.button) return;
          let t = this.view.getCamera(),
            i = t.inverseTransformPoint(t.canvasCenter());
          (r = i.x), (n = i.y);
        }
        if (!isFinite(r) || !isFinite(n) || !isFinite(o)) throw new Error("Loupe: x: " + r + ", y: " + n + ", r: " + o + ", s: " + i + ", rs: " + s + ", mx: " + e.x + ", my: " + e.y + ", mb: " + e.button + ", mim: " + e.isMouse());
        let a = new at(r - o, n - o, r + o, n + o),
          h = 1.2,
          c = (e, i) => {
            let s = t.context.createRadialGradient(r, n, 0, r, n, h * o);
            return s.addColorStop(0, e), s.addColorStop(1 / h, e), s.addColorStop(1 / h, i), s.addColorStop(1, e), s;
          };
        t.beginPath(),
          t.arc(r, n, h * o, 0, 2 * Math.PI, !1),
          t.setFillStyle(c("rgba(0,255,255,0)", "rgba(0,255,255,0.5)")),
          t.fill(),
          t.save(),
          t.beginPath(),
          t.arc(r, n, o, 0, 2 * Math.PI, !1),
          t.clip(),
          t.clearRect(a.left, a.top, a.width(), a.height()),
          this.vector.drawLoupe(t, a),
          t.restore(),
          t.beginPath(),
          t.arc(r, n, o, 0, 2 * Math.PI, !1),
          t.setLineWidth(this.vector.result.outlineWidth(i)),
          t.setStrokeStyle("#0FF"),
          t.stroke();
      }
    }
  }
  function Ft(t, e) {
    if (e)
      try {
        self.postMessage(t, e);
      } catch (e) {
        self.postMessage(t);
      }
    else self.postMessage(t);
  }
  !(function (t) {
    const e = "stickySettings";
    var i = null;
    (t.initialize = function () {
      if (!(i = null))
        try {
          i = JSON.parse(window.localStorage[e]);
        } catch (t) {
          i = {};
        }
    }),
      (t.splitView = function (t) {
        return void 0 === t
          ? 1 == i.splitView
          : ((i.splitView = t),
            (function () {
              try {
                window.localStorage[e] = JSON.stringify(i);
              } catch (t) {}
            })(),
            t);
      });
  })(N || (N = {})),
    (function (t) {
      let e,
        i,
        r,
        n = 0,
        s = !1,
        o = [],
        h = null,
        c = null,
        l = null,
        u = -1,
        p = -1,
        m = null,
        f = !1,
        g = !1,
        w = null,
        v = null;
      function b() {
        if (c) {
          let t = { maxColors: u };
          c.setProcessingOptions(t);
        }
      }
      function y(t) {
        T();
      }
      function x() {
        s || ((s = !0), O.modal(a.App.SubApps.LightBox), T(), a.$window.on("resize.PaletteApp", S), S(), e.zoomToFit());
      }
      function S() {
        i.checkSetSize(a.App.SubApps.View.$().width(), a.App.SubApps.View.$().height());
      }
      function C() {
        s && ((s = !1), a.App.SubApps.LightBox.$().modal("hide"), a.$window.off(".PaletteApp"));
      }
      function T() {
        if (s) {
          if (
            (1 == n &&
              (function () {
                if (c && c.spec) {
                  n = 2;
                  let t = {
                    url: "/images/" + c.spec.token + "/paletteIndexMap",
                    displayUrl: "Palette Preview",
                    progress: r.setProgress.bind(r),
                    error: (t) => {
                      (n = 4), r.setFailedToLoad(d.s("Failed to fetch the palette preview, you may need to re-generate your result. "));
                    },
                    success: (t) => {
                      t.arrayBuffer().then((t) => {
                        (h = t), l && l.palette.setPaletteIndexMap(h), (n = 3), k();
                      });
                    },
                  };
                  P.download(t);
                }
              })(),
            c.result && c.result != l)
          ) {
            for (l = c.result, l.palette.setPaletteIndexMap(h), u = l.palette.chosenNumColors; o.length < l.palette.length; ) o.push(new E(o.length));
            for (let t = 0; t < l.palette.length; t++) o[t].setColor(l.palette.get(t));
          }
          k();
        }
      }
      function A() {
        clearTimeout(m), (m = null), k();
      }
      function k() {
        if (l) {
          for (let t = 0; t < l.palette.length; t++) o[t].updateClasses();
          f
            ? r.setImageCanvas(c.img)
            : m ||
              (m = setTimeout(() => {
                const t = l.palette.getCanvas(R(), g);
                t && r.setImageCanvas(t), (m = null);
              }, 1));
        }
      }
      function M() {
        l && (u = l.palette.chosenNumColors), C();
      }
      function I() {
        l && u != l.palette.recommendedNumColors && ((u = l.palette.recommendedNumColors), b()), C();
      }
      function F() {
        l && l.palette.chosenNumColors != u && b(), C();
      }
      function R() {
        return p >= 0 ? p : u;
      }
      (t.setCurrentModel = function (t) {
        for (
          0 == n &&
            (function () {
              (n = 1), a.App.SubApps.Exit.$().click(M), a.App.Toolbar.Palette.$().click(x), a.App.SubApps.Palette.Cancel.$().click(M), a.App.SubApps.Palette.Reset.$().click(I), a.App.SubApps.Palette.Ok.$().click(F), (e = new vt(1, 1, !0));
              const t = new ct(1, 1);
              a.App.SubApps.View.$().append(t.element), (r = new At());
              let s = new bt(r);
              (i = new Ct(e, s, t)), i.show(), (i.topText = v = d.s("Palette Preview")), (w = d.s("Original Image")), (i.topTextMargin = 30);
            })(),
            n = 1;
          o.length > 0;

        )
          o.pop().remove();
        r.setImageCanvas(null), (h = null), (l = null), (u = -1), (p = -1), c && c.removeListener(y), (c = t), c.addListener(y), e.setImageSize(c.img.width(), c.img.height()), e.zoomToFit(), (i.bottomText = c.label);
      }),
        (t.show = x),
        (t.keyUpHandler = function (t) {
          if (!s) return !1;
          switch (t.keyCode) {
            case 66:
              (f = !1), (i.topText = v), A();
              break;
            case 86:
              (g = !1), A();
          }
          return !0;
        }),
        (t.keyDownHandler = function (t) {
          if (!s) return !1;
          switch (t.keyCode) {
            case 27:
              M();
              break;
            case 13:
              F();
              break;
            case 37:
            case 38:
              u > 2 && (u--, (p = -1), k());
              break;
            case 39:
            case 40:
              u < l.palette.length && (u++, (p = -1), k());
              break;
            case 66:
              (f = !0), (i.topText = w), A();
              break;
            case 86:
              (g = !0), A();
              break;
            case 36:
              e.zoomToFit();
              break;
            case 35:
              e.zoom1To1();
              break;
            case 33:
              e.zoomBy(1.2);
              break;
            case 34:
              e.zoomBy(1 / 1.2);
          }
          return !0;
        });
      class E {
        constructor(t) {
          (this.idx = t),
            (this.$outer = $("<div>").addClass(a.App.SubApps.Palette.swatch.name())),
            0 == t ||
              this.$outer
                .dblclick(() => {
                  F();
                })
                .click(() => {
                  !(function (t) {
                    (u = t + 1), k();
                  })(t);
                })
                .hover(
                  () => {
                    !(function (t) {
                      (p = t + 1), k();
                    })(t);
                  },
                  () => {
                    (p = -1), k();
                  }
                ),
            (this.$inner = $(`<div><span>${t + 1}</span></div>`)),
            (this.$middle = $("<div>").addClass(a.canvas_container.name())),
            this.$outer.append(this.$middle),
            this.$middle.append(this.$inner),
            a.App.SubApps.Palette.container.$().append(this.$outer);
        }
        remove() {
          this.$outer.remove();
        }
        setColor(t) {
          let e = t.argb,
            i = (e >> 24) & 255,
            r = (e >> 16) & 255,
            n = (e >> 8) & 255,
            s = (e >> 0) & 255,
            o = (Math.round(0.299 * r + 0.587 * n + 0.114 * s) * i) / 255 + (255 - i) > 128 ? "#000" : "#FFF";
          this.$inner.css("background-color", t.css), this.$outer.attr("title", t.css + "\n" + d.s("Keyboard: Left & Right")).css("color", o);
        }
        updateClasses() {
          this.$outer.toggleClass(a.App.SubApps.Palette.chosen.name(), this.isChosen()).toggleClass(a.App.SubApps.Palette.recommended.name(), this.isRecommended()).toggleClass(a.App.SubApps.Palette.active.name(), this.isActive());
        }
        isActive() {
          return this.idx < R();
        }
        isChosen() {
          return this.idx == R() - 1;
        }
        isRecommended() {
          return this.idx == l.palette.recommendedNumColors - 1;
        }
      }
    })(X || (X = {})),
    (function (t) {
      let e, i, r;
      !(function (t) {
        let e = !1;
        (t.show = function (t, i, r) {
          e || ((e = !0), O.modal(a.App.Progress.Dialog, !1, !1)), O.progressBar(a.App.Progress.Upload, t), O.progressBar(a.App.Progress.Process, i), O.progressBar(a.App.Progress.Download, r);
        }),
          (t.hide = function () {
            e && ((e = !1), a.App.Progress.Dialog.$().modal("hide"));
          });
      })(e || (e = {})),
        (function (t) {
          let e = !1;
          (t.show = function (t, i) {
            e || ((e = !0), O.modal(a.App.Error.Dialog, !1, !1)), a.App.Error.Message.$().text(t), a.App.Error.RetryButton.$().toggle(!i);
          }),
            (t.hide = function () {
              e && ((e = !1), a.App.Error.Dialog.$().modal("hide"));
            });
        })(i || (i = {})),
        (function (t) {
          t.update = function (t, e) {
            e && a.App.DownloadLink.$().attr({ href: "/images/" + e.resultStart.spec.token });
          };
        })(r || (r = {}));
      let n,
        s,
        h,
        c,
        l,
        u,
        p = !1,
        m = null,
        f = null;
      t.setCurrentModel = function (t) {
        m && m.removeListener(g),
          (m = t),
          m.addListener(g),
          p ||
            (function () {
              p = !0;
              const t = new ct(1, 1),
                e = new ct(1, 1);
              (t.element.id = a.App.ImageView.LeftCanvas.name()),
                (e.element.id = a.App.ImageView.RightCanvas.name()),
                a.App.ImageView.CanvasContainer.$().append(t.element, e.element),
                (W.MaxScaleFactor = 32),
                (n = new vt(1, 1, !0)),
                (s = new Tt()),
                (h = new Mt(s)),
                (c = new Ct(n, h, t, d.s("Original Image"))),
                (l = new It(new kt())),
                (u = new Ct(n, l, e)),
                l.showVector(),
                (c.topTextMargin = u.topTextMargin = 80),
                (h.otherView = u),
                (l.otherView = c),
                a.App.ImageView.CanvasContainer.$().mouseleave(function () {
                  h.lastMove = l.lastMove = l.lastLoupe = void 0;
                }),
                a.$window.resize(() => {
                  w();
                }),
                setTimeout(function () {
                  n.zoomToFit();
                }, 0);
              const i = 50;
              new mt(
                a.App.Toolbar.ZoomIn.$(),
                function () {
                  n.zoomBy(W.zoomStep);
                },
                i,
                1
              ),
                new mt(
                  a.App.Toolbar.ZoomOut.$(),
                  function () {
                    n.zoomBy(1 / W.zoomStep);
                  },
                  i,
                  1
                ),
                a.App.Toolbar.ZoomToFit.$().click(function () {
                  n.zoomToFit();
                }),
                a.App.Toolbar.Zoom1To1.$().click(function () {
                  n.zoom1To1();
                }),
                a.App.Toolbar.ViewSingle.$().click(function () {
                  v(!1);
                }),
                a.App.Toolbar.ViewSplit.$().click(function () {
                  v(!0);
                }),
                a.App.Toolbar.ThumbsUp.$().click(function () {
                  a.App.Feedback.DialogShare.$().modal("show");
                }),
                a.App.Toolbar.ThumbsDown.$().click(function () {
                  a.App.Feedback.Dialog.$().modal("show"), a.App.Feedback.Message.$().focus();
                }),
                O.radioButton(a.App.Toolbar.ViewBitmap, C, T),
                a.App.Error.RetryButton.$().click(() => {
                  m.reset().trigger();
                }),
                a.App.Feedback.Submit.$().click(() => {
                  m.submitFeedback(a.App.Feedback.Message.$().val()), a.App.Feedback.Dialog.$().modal("hide"), w();
                }),
                a.$window.keydown(k),
                a.$window.keyup(M),
                $(".navbar").hide(),
                $(".footer").hide(),
                $(".container >").hide(),
                a.popup_drop_target_container.$().show(),
                a.App.App.$().show(),
                b(P());
            })(),
          X.setCurrentModel(t),
          (u.bottomText = c.bottomText = m.label),
          s.setImageCanvas(m.img),
          l.vector.setImageCanvas(m.img),
          n.setImageSize(m.img.width(), m.img.height()),
          n.zoomToFit(),
          w();
      };
      let g = (t) => {
        t.source == m && w();
      };
      function w() {
        if (m) {
          f != m.result && ((f = m.result), l.vector.setResult(m.result), r.update(m.name, f));
          const t = m.isFree();
          a.App.DownloadLink.toggleClasses(t, a.isFree, a.viewer_green_button).toggleClasses(!t, a.isPaid, a.Viewer.blue_button), a.App.Toolbar.ThumbsUpDown.$().toggleClass("hidden", t || m.hasSubmittedFeedback);
          const n = a.App.ImageView.CanvasContainer.$().outerWidth(),
            s = a.App.ImageView.CanvasContainer.$().outerHeight();
          let o = (function (t, e) {
            function i(t) {
              return Math.min(8e3, Math.max(100, 0 | t));
            }
            let r = i(e - 88),
              n = i(t),
              s = n / 2 / r,
              o = n / (r / 2),
              a = i(m.img.height()),
              h = i(m.img.width()) / a,
              c = Math.abs(h - s),
              l = Math.abs(h - o);
            return c <= l;
          })(n, s);
          if (m.result) {
            let t = "" + m.result.palette.numColors();
            a.App.Toolbar.PaletteNumColors.$().text(t);
          }
          switch (m.state) {
            case 6:
              P()
                ? (a.App.Toolbar.ViewSplit.$().addClass("active"), a.App.Toolbar.ViewSingle.$().removeClass("active"), c.show(), u.show(), o ? (c.checkSetSize(Math.floor(n / 2), s), u.checkSetSize(Math.ceil(n / 2), s)) : (c.checkSetSize(n, Math.floor(s / 2)), u.checkSetSize(n, Math.ceil(s / 2))))
                : (a.App.Toolbar.ViewSplit.$().removeClass("active"), a.App.Toolbar.ViewSingle.$().addClass("active"), c.hide(), u.show(), u.checkSetSize(n, s)),
                e.hide(),
                i.hide();
              break;
            case 7:
              c.show(), u.hide(), c.checkSetSize(n, s), e.hide(), i.show(m.errorMessageTr, m.unrecoverable);
              break;
            default:
              c.show(), u.hide(), c.checkSetSize(n, s), e.show(m.uploadProgress, m.processingProgress, m.downloadProgress), i.hide();
          }
        }
      }
      function v(t) {
        N.splitView(t), b(t), w();
      }
      function b(t) {
        (h.lastMove = l.lastMove = l.lastLoupe = void 0), t ? (h.lastMoveListener = l.lastMoveListener = y) : ((h.lastMoveListener = void 0), (l.lastMoveListener = x));
      }
      const y = (t) => {
          (h.lastMove = l.lastMove = t), h.invalidate(), l.invalidate();
        },
        x = (t) => {
          (l.lastLoupe = t), l.invalidate();
        };
      function S(t, e) {
        a.App.Toolbar.ViewBitmap.$().toggleClass(o.active.name(), t);
      }
      function C() {
        l.showBitmap(), S(!0);
      }
      function T() {
        l.showVector(), S(!1);
      }
      function P() {
        return N.splitView() && a.$window.innerWidth() > 768;
      }
      function A() {
        return a.App.Feedback.Dialog.$().is(":visible");
      }
      function k(t) {
        if (A()) 13 == t.keyCode && t.ctrlKey && a.App.Feedback.Submit.$().click();
        else if (!X.keyDownHandler(t))
          switch (t.keyCode) {
            case 49:
              v(!1);
              break;
            case 50:
              v(!0);
              break;
            case 66:
              C();
              break;
            case 80:
              X.show();
              break;
            case 36:
              n.zoomToFit();
              break;
            case 35:
              n.zoom1To1();
              break;
            case 33:
              n.zoomBy(1.2);
              break;
            case 34:
              n.zoomBy(1 / 1.2);
          }
      }
      function M(t) {
        if (!A() && !X.keyUpHandler(t) && 66 === t.keyCode) T();
      }
    })(H || (H = {})),
    (function (t) {
      let e = null;
      t.exitHref = "/";
      let i = !0,
        r = !1;
      function n() {
        return location.href.split("#")[0];
      }
      function s(t) {
        const i = t.originalEvent;
        if (i.state) {
          const t = i.state;
          it.resumeUserImage(t);
        } else e != n() && (location.replace(location.href), location.href.indexOf("#") >= 0 && location.reload());
        e = n();
      }
      (t.initialize = function () {
        (e = n()), a.$window.on("popstate", s);
      }),
        (t.goToPlaceholder = function (s) {
          const o = location,
            a = "/images/processing",
            h = 0 === o.pathname.lastIndexOf(a, 0);
          (document.title = s + " - Vectorizer.AI"), h ? i && (t.exitHref = o.protocol + "//" + o.host) : (i && (t.exitHref = o.href), history.pushState(void 0, "", a), (e = n())), (i = !1), (r = !0);
        }),
        (t.goTo = function (s) {
          const o = location,
            a = o.pathname,
            h = "/images/" + s.token + "/edit",
            c = 0 === a.lastIndexOf(h, 0);
          (document.title = s.originalFilename + " - Vectorizer.AI"), c ? i && (t.exitHref = o.protocol + "//" + o.host) : (i && (t.exitHref = o.href), r ? history.replaceState(s, "", h) : history.pushState(s, "", h), O.gaSetPageAndSendPageview("/images/edit"), (e = n())), (i = !1), (r = !1);
        }),
        (t.exit = function () {
          const e = n();
          (location.href = t.exitHref), t.exitHref.indexOf("#") >= 0 && O.startsWith(t.exitHref, e) && location.reload();
        });
    })(V || (V = {})),
    (function (t) {
      let e = null,
        i = [];
      function r(t) {
        i.push(t),
          t.trigger(),
          (function (t) {
            (e = t), H.setCurrentModel(t);
          })(t);
      }
      (t.initialize = function () {}),
        (t.add = function (t, e, i) {
          let s = pt.create(e, t, i);
          s.addListener(n), r(s), V.goToPlaceholder(t.name);
        }),
        (t.resume = function (t, e) {
          r(pt.resume(e, t)), V.goTo(t);
        });
      const n = (t) => {
        t.source.spec && (V.goTo(t.source.spec), t.source.removeListener(n));
      };
    })(Y || (Y = {})),
    (function (t) {
      t.fetchUrl = function (t) {
        return "/api/fetchUrl?url=" + encodeURIComponent(t);
      };
    })(q || (q = {}));
  class Rt {
    constructor(t, e = null, i = null, r = null) {
      (this.name = t), (this.scriptUrls = e), (this.workerFunction = i), (this.messageListener = r), (this.myMessageListener = (t) => (this.messageListener ? this.messageListener(t) : void 0));
    }
    static getBasics() {
      return Ft.toString();
    }
    ensureWorker() {
      if (!this.worker) {
        let t = "'use strict';\n";
        if (((t += Rt.getBasics() + ";\n"), this.scriptUrls && this.scriptUrls.length > 0)) {
          let e = this.scriptUrls.map(function (t) {
            return t.length > 1 && "/" == t[0] && "/" == t[1] ? "https:" + t : t.length > 0 && "/" == t[0] ? location.protocol + "//" + location.host + t : t;
          });
          t += "importScripts(\n  '" + e.join("',\n  '") + "');\n";
        }
        this.workerFunction && (t += "(" + this.workerFunction.toString() + ")();\n");
        let e = new Blob([t], { type: "text/javascript" }),
          i = URL.createObjectURL(e);
        (this.worker = new Worker(i)),
          this.worker.addEventListener("error", (t) => {
            O.gaTrack("YoWorker", "Error", t.filename + ":" + t.lineno + ":" + t.colno + ", '" + t.message + "', '" + t.error + "'");
          }),
          this.worker.addEventListener("message", this.myMessageListener);
      }
      return this.worker;
    }
    setMessageListener(t) {
      this.messageListener = t;
    }
    postMessage(t, e) {
      try {
        try {
          this.ensureWorker().postMessage(t, e);
        } catch (e) {
          this.worker.postMessage(t);
        }
      } catch (t) {
        throw (O.gaTrack("YoWorker", "Exception", this.name + ": '" + t + "', '" + t.stack + "'"), t);
      }
    }
    terminate() {
      this.worker && (this.worker.terminate(), (this.worker = null));
    }
  }
  function Et() {
    class t {
      constructor(t, e, i, r, n) {
        (this.dataIn = t), (this.wIn = e), (this.hIn = i), (this.wOut = r), (this.hOut = n), (this.dataOut = new Uint8ClampedArray(r * n * 4)), (this.outToInX = this.wIn / this.wOut), (this.outToInY = this.hIn / this.hOut);
        let s = t.length,
          o = !1;
        for (let e = 3; e < s; e += 4) {
          if (t[e] < 255) {
            o = !0;
            break;
          }
        }
        (this.hasTransparency = o), (this.accumulate = this.hasTransparency ? this.accumulateRgba : this.accumulateRgb);
      }
      reset() {
        (this.aSum = 0), (this.rSum = 0), (this.gSum = 0), (this.bSum = 0), (this.wSum = 0);
      }
      accumulateRgb(t, e, i) {
        const r = 4 * (t + this.wIn * e);
        (this.rSum += this.dataIn[r + 0] * i), (this.gSum += this.dataIn[r + 1] * i), (this.bSum += this.dataIn[r + 2] * i), (this.wSum += i);
      }
      accumulateRgba(t, e, i) {
        const r = 4 * (t + this.wIn * e);
        let n = (this.dataIn[r + 3] / 255 + 1e-12) * i;
        (this.aSum += n), (this.rSum += this.dataIn[r + 0] * n), (this.gSum += this.dataIn[r + 1] * n), (this.bSum += this.dataIn[r + 2] * n), (this.wSum += i);
      }
      populate(t, e) {
        this.reset();
        const i = t * this.outToInX,
          r = e * this.outToInY,
          n = Math.min(i + this.outToInX, this.wIn),
          s = Math.min(r + this.outToInY, this.hIn),
          o = Math.floor(i),
          a = Math.floor(r),
          h = Math.ceil(n) - 1,
          c = Math.ceil(s) - 1,
          l = Math.ceil(i),
          u = Math.ceil(r),
          d = h,
          p = c,
          m = l - i,
          f = u - r,
          g = n - d,
          w = s - p;
        this.accumulate(o, a, m * f), this.accumulate(o, c, m * w);
        for (var v = l; v < d; v++) this.accumulate(v, a, f), this.accumulate(v, c, w);
        this.accumulate(h, a, g * f), this.accumulate(h, c, g * w);
        for (var b = u; b < p; b++) {
          this.accumulate(o, b, m);
          for (v = l; v < d; v++) this.accumulate(v, b, 1);
          this.accumulate(h, b, g);
        }
        const y = 4 * (t + e * this.wOut);
        this.hasTransparency
          ? ((this.dataOut[y + 0] = this.rSum / this.aSum), (this.dataOut[y + 1] = this.gSum / this.aSum), (this.dataOut[y + 2] = this.bSum / this.aSum), (this.dataOut[y + 3] = (this.aSum / this.wSum) * 255))
          : ((this.dataOut[y + 0] = this.rSum / this.wSum), (this.dataOut[y + 1] = this.gSum / this.wSum), (this.dataOut[y + 2] = this.bSum / this.wSum), (this.dataOut[y + 3] = 255));
      }
      shrink() {
        for (var t = 0, e = 0; t < this.hOut; t++) for (var i = 0; i < this.wOut; i++, e++) this.populate(i, t);
        return this.dataOut;
      }
    }
    var e = [];
    function i(i) {
      e.push(Date.now());
      const r = ((n = i.dataIn), (s = i.wIn), (o = i.hIn), (a = i.wOut), (h = i.hOut), new t(n, s, o, a, h).shrink());
      var n, s, o, a, h;
      return Date.now(), e.pop(), r;
    }
    self.addEventListener("message", (t) => {
      try {
        var e = t.data;
        const r = i(e);
        Ft({ canvasId: e.canvasId, success: !0, wOut: e.wOut, hOut: e.hOut, dataOut: r }, [r.buffer]);
      } catch (t) {
        Ft({ canvasId: e.canvasId, success: !1, wOut: 0, hOut: 0, dataOut: null });
      }
    });
  }
  !(function (t) {
    let e = !0,
      i = 0;
    const r = new ft();
    t.ThumbnailJpegQuality = 0.7;
    class n {
      constructor(t, e) {
        if (((this.canvasId = t), (this.spec = e), (this.failSafeTimeout = void 0), (this.croppedCanvas = this.spec.inputCanvas), this.spec.crop)) {
          const t = this.spec.crop,
            e = t.right - t.left,
            i = t.bottom - t.top;
          if (0 != t.top || 0 != t.left || e != this.spec.inputCanvas.width() || i != this.spec.inputCanvas.height()) {
            const r = new ct(e, i);
            r.context().drawCanvasEx3(this.spec.inputCanvas, t.left, t.top, r.width(), r.height(), 0, 0, r.width(), r.height()), (this.croppedCanvas = r), (this.croppedCanvas.wasCropped = !0);
          }
        }
        let i = this.croppedCanvas.width(),
          r = this.croppedCanvas.height();
        (this.wOut = i), (this.hOut = r);
        if (i * r > this.spec.maxNumPixels) {
          const t = Math.sqrt(this.spec.maxNumPixels / (i * r));
          if (i < r) {
            for (this.wOut = Math.max(1, 0 | Math.round(i * t)), this.hOut = 0 | Math.round((r * this.wOut) / i); this.wOut * this.hOut > this.spec.maxNumPixels && this.wOut > 1; ) this.wOut--, (this.hOut = 0 | Math.round((r * this.wOut) / i));
            1 == this.wOut && this.hOut > this.spec.maxNumPixels && (this.hOut = this.spec.maxNumPixels);
          } else {
            for (this.hOut = Math.max(1, 0 | Math.round(r * t)), this.wOut = 0 | Math.round((i * this.hOut) / r); this.wOut * this.hOut > this.spec.maxNumPixels && this.hOut > 1; ) this.hOut--, (this.wOut = 0 | Math.round((i * this.hOut) / r));
            1 == this.hOut && this.wOut > this.spec.maxNumPixels && (this.wOut = this.spec.maxNumPixels);
          }
        }
      }
      shrinkingNeeded() {
        return this.wOut != this.croppedCanvas.width() || this.hOut != this.croppedCanvas.height();
      }
      createOutputCanvas() {
        return new ct(this.wOut, this.hOut);
      }
      shrinkWithWorker() {
        try {
          const t = this.croppedCanvas.context().getImageData(0, 0, this.croppedCanvas.width(), this.croppedCanvas.height()).data,
            e = { canvasId: this.canvasId, wIn: this.croppedCanvas.width(), hIn: this.croppedCanvas.height(), dataIn: t, wOut: this.wOut, hOut: this.hOut };
          (this.failSafeTimeout = setTimeout(() => this.shrinkWithWorkerFailSafe("fail-safe timeout reached"), 1e4)), this.spec.worker.setMessageListener(s), this.spec.worker.postMessage(e, [t.buffer]);
        } catch (t) {
          this.shrinkWithWorkerFailSafe("exception in spawning worker or sending work message");
        }
      }
      shrinkWithWorkerResultHandler(t) {
        if (t.success && t.wOut == this.wOut && t.hOut == this.hOut && null != t.dataOut && t.dataOut.length > 0) {
          O.gaTrack("WebWorker", "Downsample", "Succeeded", 1);
          const e = this.createOutputCanvas(),
            i = e.context().createImageData(e.width(), e.height());
          i.data.set(t.dataOut), e.context().putImageData(i, 0, 0), (e.wasShrunk = !0), (e.wasCropped = this.croppedCanvas.wasCropped), this.completed(e);
        } else this.shrinkWithWorkerFailSafe("Worker reports failure");
      }
      shrinkWithWorkerFailSafe(t) {
        O.gaTrack("WebWorker", "Downsample", "Failed", 0), (e = !1), this.shrinkWithoutWorker();
      }
      shrinkWithoutWorker() {
        var t = this.createOutputCanvas();
        t.context().drawCanvasEx2(this.croppedCanvas, 0, 0, t.width(), t.height()), (t.wasShrunk = !0), (t.wasCropped = this.croppedCanvas.wasCropped), this.completed(t);
      }
      produceThumbnail(e) {
        if (this.spec.thumbnailSize) {
          const i = this.spec.thumbnailSize.w,
            r = this.spec.thumbnailSize.h,
            n = new ct(i, r);
          n.context().setFillStyle("rgb(255,255,255)"), n.context().fillRect(0, 0, i, r);
          const s = Math.min(i / e.width(), r / e.height());
          return n.context().context.drawImage(e.element, (i - e.width() * s) / 2, (r - e.height() * s) / 2, e.width() * s, e.height() * s), n.toBlob("image/jpeg", t.ThumbnailJpegQuality);
        }
        return null;
      }
      completed(t) {
        clearTimeout(this.failSafeTimeout), (this.failSafeTimeout = void 0), r.remove(this.canvasId), this.spec.completed(t, t.wasShrunk || t.wasCropped, () => this.produceThumbnail(t));
      }
      process() {
        this.shrinkingNeeded() ? (e && this.spec.worker ? this.shrinkWithWorker() : this.shrinkWithoutWorker()) : this.completed(this.croppedCanvas);
      }
    }
    function s(t) {
      const e = t.data;
      r.contains(e.canvasId) && r.get(e.canvasId).shrinkWithWorkerResultHandler(e);
    }
    t.process = function (t) {
      const e = new n("cs_" + i++, t);
      r.put(e.canvasId, e), e.process();
    };
  })(j || (j = {})),
    (function (t) {
      t.Mega = 1048576;
      const e = 10,
        i = 20,
        r = 100,
        n = 20,
        s = 6,
        o = n - 2,
        h = s - 2;
      t.initialized = !1;
      var c = null;
      (t.lockAspectRatio = !1), (t.maxNumMegapixels = 4);
      var l = 0,
        u = 0;
      const d = st.empty();
      var p = 1,
        m = null,
        f = null,
        g = 0,
        w = 0,
        v = 0,
        y = 0;
      const x = at.zero();
      var S = 1,
        C = 1,
        T = 0,
        P = 0;
      const A = st.empty(),
        k = st.empty(),
        M = st.empty(),
        I = st.empty();
      var F = !1;
      const R = st.empty(),
        E = at.zero(),
        _ = at.zero();
      class D {
        constructor(t, e) {
          (this.key = t), (this.anchor = e), (this.oppositeAnchor = b.opposite(this.anchor));
        }
      }
      var L = null;
      const B = new D("resize-top", b.Top),
        G = new D("resize-top-right", b.TopRight),
        W = new D("resize-right", b.Right),
        z = new D("resize-bottom-right", b.BottomRight),
        N = new D("resize-bottom", b.Bottom),
        X = new D("resize-bottom-left", b.BottomLeft),
        H = new D("resize-left", b.Left),
        V = new D("resize-top-left", b.TopLeft),
        Y = new D("resize-move", b.Center);
      let q = !1;
      function j(e, i, r, n, s) {
        r.$().text(e.toFixed(0) + " x " + i.toFixed(0) + " px"), n.$().text(O.formatAspectRatio(O.fuzzyAspectRatioEx({ w: e, h: i }, c.aspectRatios))), s.$().text(((e * i) / t.Mega).toFixed(1));
      }
      function Q() {
        a.PreCrop.Sidebar.MaxNumMegapixels.display.$().text(t.maxNumMegapixels + " megapixels"), j(Math.round(_.width()), Math.round(_.height()), a.PreCrop.Sidebar.cropped_image_size_display, a.PreCrop.Sidebar.cropped_image_aspect_ratio_display, a.PreCrop.Sidebar.cropped_image_megapixels_display), a.PreCrop.Sidebar.lock_aspect_ratio_button.$().prop("checked", t.lockAspectRatio);
        const e = (_.width() * _.height()) / t.Mega > t.maxNumMegapixels;
        a.PreCrop.Sidebar.cropped_image_warning.$().toggle(e), a.PreCrop.Sidebar.cropped_image_success.$().toggle(!e), a.PreCrop.Sidebar.cropped_image_megapixels_display.$().attr("style", e ? "color:red;" : "");
      }
      function Z() {
        (t.lockAspectRatio = !t.lockAspectRatio), pt(), Q();
      }
      function J() {
        (t.maxNumMegapixels = Math.min(t.maxNumMegapixels + 1, c.maxMaxNumMegapixels)), Q();
      }
      function K() {
        (t.maxNumMegapixels = Math.max(1, t.maxNumMegapixels - 1)), Q();
      }
      function tt() {
        $(window).off("beforeunload"), location.reload();
      }
      function et() {
        const t = _.width(),
          e = _.height();
        t > 0 && e > 0 && null != c.completed && (c.completed(_), a.PreCrop.App.$().hide(), q || a.body.$().removeClass("modal-open"));
      }
      function it(t, e) {
        if (null != t && null != e) {
          A.set(M), k.set(I);
          var i = $(f.element).offset();
          return M.setXy(t - i.left, e - i.top), (r = M), I.setXy((r.x - x.left) * C, (r.y - x.top) * C), A.notEquals(M) || k.notEquals(I);
        }
        var r;
        return !1;
      }
      function rt() {
        const t = i * C,
          e = Math.abs(I.x - _.left) < t,
          r = Math.abs(I.y - _.top) < t,
          n = Math.abs(I.x - _.right) < t,
          s = Math.abs(I.y - _.bottom) < t,
          o = _.center(),
          a = Math.abs(I.x - o.x) < t && Math.abs(I.y - o.y) < t;
        var h = null;
        I.x > _.left - t && I.x < _.right + t && I.y > _.top - t && I.y < _.bottom + t && (e ? (h = r ? V : s ? X : H) : n ? (h = r ? G : s ? z : W) : r ? (h = B) : s ? (h = N) : a && (h = Y)), nt(h);
      }
      function nt(t) {
        (L = t), null == t ? $(f.element).attr("class", "canvas-view") : $(f.element).attr("class", L.key + "-tool canvas-view"), Pt();
      }
      function ot(t) {
        const e = t.touches.item(0);
        dt(e.pageX, e.pageY), ft(e.pageX, e.pageY), t.preventDefault();
      }
      function ht(t) {
        const e = t.touches.item(0);
        dt(e.pageX, e.pageY), t.preventDefault();
      }
      function lt(t) {
        wt(-1e5, -1e5), t.preventDefault();
      }
      function ut(t) {
        dt(t.pageX, t.pageY);
      }
      function dt(t, e) {
        const i = it(t, e);
        if (F) {
          if (null != L && i) {
            _.setFrom(E), _.moveAnchor(L.anchor, I.minus(R)), _.normalize(), (_.left = Math.max(_.left, 0)), (_.top = Math.max(_.top, 0)), (_.right = Math.min(_.right, l)), (_.bottom = Math.min(_.bottom, u)), _.round();
            Math.round(Math.max(0, r - _.width())), Math.round(Math.max(0, r - _.height()));
            _.moveAnchorToMinSize(L.anchor, r, r), _.round(), pt(), Q(), Pt();
          }
        } else rt();
      }
      function pt() {
        if (t.lockAspectRatio) {
          var e = b.Center;
          if ((null != L && (e = L.oppositeAnchor), _.forceAspectRatio(p, e), _.width() > l || _.height() > u)) _.set(0, 0, l, u);
          else {
            const t = Math.max(0, -_.left) + Math.min(0, l - _.right),
              e = Math.max(0, -_.top) + Math.min(0, u - _.bottom);
            _.translate(t, e);
          }
          _.round(), Pt();
        }
      }
      function mt(t) {
        ft(t.pageX, t.pageY), $(window).on("mouseup", gt), $(window).on("mousemove", ut);
      }
      function ft(t, e) {
        (F = !0), R.set(I), E.setFrom(_), it(t, e);
      }
      function gt(t) {
        wt(t.pageX, t.pageY), $(window).off("mouseup", gt), $(window).off("mousemove", ut);
      }
      function wt(t, e) {
        (F = !1), $(window).off("mouseup", gt), $(window).off("mousemove", ut), it(t, e), rt();
      }
      function vt(t) {
        F || nt(null);
      }
      function bt(t) {
        F || (it(t.pageX, t.pageY), rt());
      }
      function yt() {
        null != m && null != f && ((g = m.outerWidth()), (w = m.outerHeight()), (f.width() == g && f.height() == w) || f.setSize(g, w), (y = w - 2 * e) / (v = g - 2 * e) > u / l ? ((x.left = e), (P = (u / l) * (T = v)), (x.top = e + 0.5 * (y - P))) : ((x.top = e), (T = (l / u) * (P = y)), (x.left = e + 0.5 * (v - T))), (x.right = x.left + T), (x.bottom = x.top + P), (C = 1 / (S = T / l))),
          Q(),
          Pt();
      }
      function xt(t) {
        return new st(x.left + t.x * S, x.top + t.y * S);
      }
      function St(t, e, i, r, a) {
        const c = L == a,
          l = xt(e);
        t.setFillStyle("#ffffff"), t.fillRect(l.x + i, l.y + r, i * n, r * s), t.fillRect(l.x + i, l.y + r, i * s, r * n), t.setFillStyle(c ? "#ff0000" : "#000000"), t.fillRect(l.x + 2 * i, l.y + 2 * r, i * o, r * h), t.fillRect(l.x + 2 * i, l.y + 2 * r, i * h, r * o);
      }
      function Ct(t, e, i, r) {
        const a = L == r,
          c = xt(e);
        t.setFillStyle("#ffffff"), t.fillRect(c.x + i, c.y - n / 2, i * s, n), t.setFillStyle(a ? "#ff0000" : "#000000"), t.fillRect(c.x + 2 * i, c.y - o / 2, i * h, o);
      }
      function Tt(t, e, i, r) {
        const a = L == r,
          c = xt(e);
        t.setFillStyle("#ffffff"), t.fillRect(c.x - n / 2, c.y + i, n, i * s), t.setFillStyle(a ? "#ff0000" : "#000000"), t.fillRect(c.x - o / 2, c.y + 2 * i, o, i * h);
      }
      function Pt() {
        if (null != c.inputCanvas && null != f && 0 != g && 0 != w) {
          const r = f.context();
          r.clearRect(0, 0, g, w), r.drawCanvasEx2(c.inputCanvas, x.left, x.top, T, P), r.setStrokeStyle("#000000"), r.setGlobalAlpha(0.4), r.setLineWidth(1);
          const n = Math.round(((e = _.left), x.left + e * S)) + 0.5,
            s = Math.round(((t = _.top), x.top + t * S)) + 0.5,
            o = Math.round(_.width() * S) - 1,
            a = Math.round(_.height() * S) - 1;
          r.strokeRect(n, s, o, a),
            r.setGlobalAlpha(1),
            St(r, _.topLeft(), 1, 1, V),
            St(r, _.topRight(), -1, 1, G),
            St(r, _.bottomRight(), -1, -1, z),
            St(r, _.bottomLeft(), 1, -1, X),
            Ct(r, _.leftCenter(), 1, H),
            Ct(r, _.rightCenter(), -1, W),
            Tt(r, _.topCenter(), 1, B),
            Tt(r, _.bottomCenter(), -1, N),
            (function (t, e, r) {
              var n = i / 2,
                s = 1.75 * n,
                o = L == r ? "#ff0000" : "#000000";
              const a = xt(e);
              t.beginPath(), t.triangle(a.x, a.y - s, -Math.PI / 2, 2, 5), t.triangle(a.x, a.y + s, Math.PI / 2, 2, 5), t.triangle(a.x - s, a.y, Math.PI, 2, 5), t.triangle(a.x + s, a.y, 0, 2, 5), t.strokeEx(2, "#FFF"), t.fillEx(o);
              var h = n + 2;
              t.fillCircle(a.x, a.y, h, "#FFFFFF"), t.fillCircle(a.x, a.y, h - 1, o);
            })(r, _.center(), Y);
        }
        var t, e;
      }
      t.show = function (e) {
        (l = (c = e).inputCanvas.width()),
          (u = c.inputCanvas.height()),
          d.setXy(0.5 * l, 0.5 * u),
          _.set(0, 0, l, u),
          (p = u / l),
          (t.lockAspectRatio = !!c.lockAspectRatio),
          (t.maxNumMegapixels = c.maxNumMegapixels),
          t.initialized ||
            ((t.initialized = !0),
            (m = a.PreCrop.ViewContainer.$()),
            (f = new ct(m.outerWidth(), m.outerHeight())),
            m.append(f.element),
            $(f.element).mousedown(mt).mouseup(gt).mousemove(ut).hover(bt, vt),
            f.element.addEventListener("touchstart", ot, U.AddEventListenerThirdArgForTouch),
            f.element.addEventListener("touchmove", ht, U.AddEventListenerThirdArgForTouch),
            f.element.addEventListener("touchend", lt, U.AddEventListenerThirdArgForTouch),
            a.PreCrop.Sidebar.crop_button.$().click(et),
            a.PreCrop.Sidebar.cancel_button.$().click(tt),
            a.PreCrop.Sidebar.lock_aspect_ratio_button.$().click(Z),
            c.maxMaxNumMegapixels ? (a.PreCrop.Sidebar.MaxNumMegapixels.decrease.$().click(K), a.PreCrop.Sidebar.MaxNumMegapixels.increase.$().click(J)) : (a.PreCrop.Sidebar.MaxNumMegapixels.decrease.$().hide(), a.PreCrop.Sidebar.MaxNumMegapixels.increase.$().hide()),
            $(window).resize(yt)),
          j(l, u, a.PreCrop.Sidebar.input_image_size_display, a.PreCrop.Sidebar.input_image_aspect_ratio_display, a.PreCrop.Sidebar.input_image_megapixels_display),
          Q(),
          a.PreCrop.App.$().show(),
          (q = a.body.$().hasClass("modal-open")),
          q || a.body.$().addClass("modal-open"),
          setTimeout(yt, 0);
      };
    })(Q || (Q = {})),
    (function (t) {
      const e = new Rt("Downsampler", [], Et);
      t.loadImageShrinkAndThumbnail = function (i, r, n, s) {
        t.loadCheckRotateImage(i, !1, r, (r, o) => {
          let a = G.MaxMaxNumPixels;
          const h = r.width() * r.height(),
            c = h > a,
            l = { w: r.width(), h: r.height(), sizePixels: h, sizeBytes: i.size, transparent: void 0, dpi: o.dpi() };
          function u(o) {
            j.process({
              inputCanvas: r,
              crop: o,
              maxNumPixels: a,
              thumbnailSize: void 0,
              worker: s ? e : void 0,
              completed: function (e, r, s) {
                if ((o && ((l.w = o.right - o.left), (l.h = o.bottom - o.top)), r || t.needsReencoding(i.type))) {
                  let r = t.recodeCanvasFile(i, e);
                  n(l, r, e);
                } else n(l, i, e);
              },
            });
          }
          (i = o.checkFixType(i)),
            c
              ? Q.show({
                  inputFile: i,
                  inputCanvas: r,
                  lockAspectRatio: void 0,
                  maxNumMegapixels: G.MaxMaxNumMegapixels,
                  maxMaxNumMegapixels: G.MaxMaxNumMegapixels,
                  aspectRatios: [],
                  completed: (t) => {
                    (a = 1024 * Q.maxNumMegapixels * 1024), u(t);
                  },
                })
              : u();
        });
      };
    })(Z || (Z = {})),
    (function (t) {
      function e(t) {
        return 0 == t ? "0.0%" : 100 == t ? "100.0%" : t < 0.005 || 99.995 < t ? t.toFixed(4) + "%" : t < 0.05 || 99.95 < t ? t.toFixed(3) + "%" : t < 0.5 || 99.5 < t ? t.toFixed(2) + "%" : t.toFixed(1) + "%";
      }
      function i(t) {
        return t.toLocaleString("en-US");
      }
      t.init = function () {
        a.chart.$().each((t, r) => {
          const n = JSON.parse(r.dataset.x),
            s = JSON.parse(r.dataset.ys),
            o = r.dataset.labels && JSON.parse(r.dataset.labels),
            a = r.dataset.colors && JSON.parse(r.dataset.colors),
            h = r.dataset.title,
            c = r.dataset.unit,
            l = s.map((t, e) => {
              let i = { data: t, fill: !1 };
              return o && o[e] && (i.label = o[e]), a && a[e] && ((i.borderColor = a[e]), (i.backgroundColor = a[e])), i;
            });
          let u = "%" == c ? e : i;
          new Chart(r, {
            type: "line",
            data: { labels: n, datasets: l },
            options: {
              plugins: {
                legend: { display: !!o, position: "right", reverse: !0, labels: { boxWidth: 12 } },
                title: { display: !!h, text: h },
                tooltip: {
                  callbacks: {
                    label: function (t) {
                      let e = t.dataset.label || "";
                      return e && (e += ": "), null !== t.parsed.y && (e += u(t.parsed.y)), e;
                    },
                  },
                },
              },
              elements: { point: { pointStyle: !1, hitRadius: 7 } },
              scales: { y: { suggestedMax: 10, suggestedMin: 0, ticks: { beginAtZero: !1, callback: (t, e, i) => u(t) } } },
            },
          });
        });
      };
    })(J || (J = {})),
    (function (t) {
      let e;
      !(function (t) {
        (t[(t.paypal = 0)] = "paypal"), (t[(t.fake = 1)] = "fake");
      })(e || (e = {}));
      function i(t) {
        let e = [];
        function i(t, i) {
          e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i));
        }
        function r(t, e) {
          if ($.isArray(e))
            $.each(e, function (e, i) {
              r(t + "[" + e + "]", i);
            });
          else if ("object" == $.type(e)) for (let i in e) e.hasOwnProperty(i) && r(t + "." + i, e[i]);
          else i(t, e);
        }
        i(GlobalsShared.localeQueryParameter, GlobalsShared.locale);
        for (let e in t) t.hasOwnProperty(e) && r(e, t[e]);
        return e.join("&").replace(" ", "+");
      }
      function r(t) {
        return function (e, i, r) {
          t({ error: { message: s(e, i) } });
        };
      }
      function s(t, e) {
        if (0 === t.status) return d.s("Failed to connect to the server.") + "\n" + d.s("Please verify your network connection.") + "\n";
        {
          const r = ((i = t.response), i ? ("object" == typeof i ? JSON.stringify(i) : i.toString()) : "null").substring(0, 200);
          return t.status < 200 || 299 < t.status ? t.statusText + " [" + t.status + "]\n" + r : "parsererror" === e ? d.s("Failed to parse JSON response.") + " [" + e + "]\n" + r : "timeout" === e ? d.s("Request time out.") + " [" + e + "]" : "abort" === e ? d.s("Request aborted by the server.") + " [" + e + "]" : d.s("Unknown error.") + "\n" + r;
        }
        var i;
      }
      function o() {
        return merchantJs.settings.host + "/payments/v0/preapprovals/" + merchantJs.settings.wud + "/";
      }
      function h(t, e) {
        let n = o() + "payment_method?" + i(t);
        $.ajax(n, {
          dataType: "jsonp",
          timeout: 3e4,
          success: function (t) {
            e(t);
          },
          error: r(e),
        });
      }
      let c, l, u, p;
      !(function (t) {
        let n = null,
          s = null;
        function a() {
          n && (s && (clearInterval(s), (s = null)), n.close(), (n = null));
        }
        function c(t, s, h) {
          a(), (n = window.open("", "_blank")), n.document.write("<h3>Loading...</h3>");
          var c = o() + e[t] + "?" + i(s);
          $.ajax(c, {
            dataType: "jsonp",
            timeout: 3e4,
            success: function (t) {
              h(t);
            },
            error: r(h),
          });
        }
        t.handler = function (t) {
          return function (e, i, r) {
            c(t, e, function (t) {
              var e, o;
              !t || t.error
                ? (a(), i(t))
                : ((e = t.preapproval.processorToken.url),
                  (o = function () {
                    r(), h(t.preapproval, i);
                  }),
                  n &&
                    ((n.location.href = e),
                    n.focus(),
                    (s = setInterval(function () {
                      n.closed && (clearInterval(s), (s = null), o());
                    }, 100))));
            });
          };
        };
      })(c || (c = {})),
        (function (t) {
          (t.initialize = function () {
            return !0;
          }),
            (t.pay = function (t) {
              t({ error: { message: "Unavailable" } });
            }),
            (t.radioButton = function () {
              return new n("__unavailable_payment_processor__");
            }),
            (t.name = function () {
              return "unavailable";
            });
        })(l || (l = {})),
        (function (t) {
          let e, i, r;
          (t.initialize = function () {
            return (
              "undefined" != typeof Stripe &&
              ((e = Stripe(merchantJs.settings.stripePublishableKey)),
              (i = e.elements({ locale: GlobalsShared.locale })),
              (r = i.create("card", { style: { base: { lineHeight: "1.429" } } })),
              r.mount(a.merchant.StripeCardElement.css()),
              r.on("change", function (t) {
                t && t.error ? a.merchant.StripeCardErrors.$().text(t.error.message) : a.merchant.StripeCardErrors.$().text("");
              }),
              r.on("focus", function () {
                a.merchant.StripeCardElement.$().addClass("focus");
              }),
              r.on("blur", function () {
                a.merchant.StripeCardElement.$().removeClass("focus");
              }),
              !0)
            );
          }),
            (t.pay = function (t) {
              g(),
                e.createToken(r, { name: a.merchant.StripeNameElement.$().val() }).then(function (e) {
                  if (e.error) t({ error: { message: e.error.message } });
                  else {
                    b();
                    const i = e.token;
                    h({ processor: "stripe", processorToken: { id: i.id, card: i.card }, preapprovalSpec: merchantJs.preapprovalSpec }, t);
                  }
                });
            }),
            (t.radioButton = function () {
              return a.merchant.RadioStripe;
            }),
            (t.name = function () {
              return "stripe";
            });
        })(u || (u = {})),
        (function (t) {
          let e;
          (t.initialize = function () {
            if ("undefined" != typeof braintree) {
              let t = !0;
              return (
                braintree.dropin
                  .create({ authorization: merchantJs.settings.braintreeTokenizationKey, container: a.merchant.BraintreeDropinContainer.css(), locale: GlobalsShared.locale.replace("-", "_"), card: { cardholderName: !0 }, dataCollector: { kount: !0 } })
                  .then(function (t) {
                    if (((e = t), "USD" != merchantJs.preapprovalSpec.currency)) for (let t of ["american-express", "jcb", "discover"]) $("div[data-braintree-id='" + t + "-card-icon']").addClass("braintree-hidden");
                  })
                  .catch(function (e) {
                    (t = !1), g(), a.merchant.PaymentError.$().text(e.message).show();
                  }),
                t
              );
            }
            return !1;
          }),
            (t.pay = function (t) {
              g(),
                e.requestPaymentMethod(function (i, r) {
                  if (i) e.clearSelectedPaymentMethod(), t({ error: i });
                  else {
                    b();
                    h({ processor: "braintree", processorToken: r, preapprovalSpec: merchantJs.preapprovalSpec }, function (i) {
                      i.error && e.clearSelectedPaymentMethod(), t(i);
                    });
                  }
                });
            }),
            (t.radioButton = function () {
              return a.merchant.RadioBraintree;
            }),
            (t.name = function () {
              return "braintree";
            });
        })(p || (p = {}));
      const m = c.handler(e.paypal),
        f = c.handler(e.fake);
      function g() {
        a.merchant.PaymentError.$().hide(), a.merchant.StripePaymentError.$().hide(), a.merchant.PaymentMethodFormSubmit.$().attr("disabled", "disabled");
      }
      function w() {
        a.merchant.PaymentMethodFormSubmit.$().removeAttr("disabled");
      }
      function v(t) {
        a.merchant.PaymentError.$()
          .html("<p>" + t)
          .show(),
          w();
      }
      function b() {
        a.merchant.ShowWhenMinibrowsing.$().modal("hide"), a.merchant.ShowWhenCreatingPm.$().modal("show");
      }
      function y(t) {
        a.merchant.ShowWhenMinibrowsing.$().modal("hide"), a.merchant.ShowWhenCreatingPm.$().modal("hide"), null === t ? v("Got a null response from the server") : t.error ? v(t.error.message) : (a.merchant.ShowWhenSubmitting.$().modal("show"), S({ streamlexPaymentToken: t.paymentMethod.streamlexPaymentToken, defaultPaymentMethod: x }));
      }
      let x = "stripe",
        S = null;
      $(function () {
        "undefined" != typeof merchantJs &&
          (!(function (t) {
            S = t;
            let e = !1,
              i = !1;
            merchantJs.settings.braintreePrimary ? (merchantJs.settings.canBraintree ? (e = !0) : merchantJs.settings.canStripe && (i = !0)) : merchantJs.settings.canStripe ? (i = !0) : merchantJs.settings.canBraintree && (e = !0);
            const r = e ? p : i ? u : l,
              n = r.initialize(),
              s = n && (merchantJs.settings.canBraintree || merchantJs.settings.canStripe || merchantJs.settings.canPaypal);
            x = r.name();
            const o = $("input[type=radio][name=paymentMethod]");
            let h = null,
              c = !1;
            o.change(function () {
              var t;
              a.merchant.CreditCardProcessorForm.$().toggle(r.radioButton().$().prop("checked")),
                (h = $(this)),
                a.merchant.RadioPaypal.$().prop("checked") && a.merchant.CantPaypal.$().length > 0 ? (a.merchant.CantPaypal.$().show(), g()) : (a.merchant.CantPaypal.$().hide(), s && w()),
                (c = merchantJs.needZipCode && ("paypal" == (t = h.data("processor") || h.val()) || "fake" == t)),
                a.merchant.TaxSection.$().toggle(c);
            }),
              $("#paymentMethod_" + merchantJs.defaultPaymentMethod)
                .prop("checked", !0)
                .change(),
              a.merchant.AcceptTermsWrapper.$().removeClass(a.merchant.has_error.name()),
              a.merchant.InitializingIndicator.$().hide(),
              a.merchant.SubmitSection.$().show(),
              a.merchant.PaymentMethodForm.$().submit(function () {
                x = (h && h.val()) || r.name();
                let e = !1;
                if (c) {
                  let t = /^\d{5}$/,
                    i = ("" + a.merchant.TaxPostalCode.$().val()).trim();
                  t.test(i) ? (a.merchant.TaxPostalCodeFormGroup.removeClass(a.merchant.has_error), a.merchant.TaxLocationPostalCode.$().val(i)) : (a.merchant.TaxPostalCodeFormGroup.addClass(a.merchant.has_error), (e = !0));
                }
                if ((a.merchant.AcceptTerms.$().prop("checked") ? a.merchant.AcceptTermsWrapper.removeClass(a.merchant.has_error) : (a.merchant.AcceptTermsWrapper.addClass(a.merchant.has_error), (e = !0)), e)) return !1;
                switch ((g(), x)) {
                  case "stripe":
                    u.pay(y);
                    break;
                  case "braintree":
                    p.pay(y);
                    break;
                  case "paypal":
                    a.merchant.ShowWhenMinibrowsing.$().modal("show"), m(merchantJs.preapprovalSpec, y, b);
                    break;
                  case "fake":
                    merchantJs.settings.isTesting && (a.merchant.ShowWhenMinibrowsing.$().modal("show"), f(merchantJs.preapprovalSpec, y, b));
                    break;
                  default:
                    a.merchant.ShowWhenSubmitting.$().modal("show"), t({ streamlexPaymentToken: x, defaultPaymentMethod: x });
                }
                return !1;
              }),
              s ? w() : (g(), n || a.merchant.FailedToLoadPaymentBackendJs.$().show());
          })(function (t) {
            a.merchant.StreamlexPaymentToken.$().val(t.streamlexPaymentToken), a.merchant.DefaultPaymentMethod.$().val(t.defaultPaymentMethod), a.merchant.PaymentForm.$().submit();
          }),
          $(window).on("load", function () {
            new Image().src = "https://www.paypal.com/home";
          }));
      });
    })(K || (K = {})),
    (function (t) {
      let e = !1,
        i = [];
      function r() {
        if (0 == i.length) (e = !1), a.$window.off(".SvgAnimation");
        else {
          const t = $(document).scrollTop(),
            e = a.$window.height(),
            r = t + e,
            n = t + 0.5 * e;
          let o = [];
          for (let t of i) {
            const e = t.Id.$().offset().top,
              i = e + t.Id.$().height();
            (n > e || r > i) && o.push(t);
          }
          for (let t of o) i.splice(i.indexOf(t), 1), s(t);
        }
      }
      t.register = function (t) {
        t.Id.$().length > 0 && (e || ((e = !0), a.$window.on("resize.SvgAnimation scroll.SvgAnimation", r)), i.push(t), r());
      };
      const n = 1.5;
      function s(t) {
        const e = new TimelineLite(),
          i = t.Id.$().data("zoom-rects"),
          r = i[O.randomInt(i.length)];
        let a = O.randomInt2(r.x0, r.x1),
          c = O.randomInt2(r.y0, r.y1);
        const l = +t.Id.$().data("zoom-to-scale") || 1;
        e
          .delay(1)
          .to(t.transformable.$(), n, { svgOrigin: a + " " + c, scale: l })
          .to(t.Outlines.$(), n, { attr: { x: "0%" } })
          .to(t.Shapes.$(), n, { attr: { x: "0%" } }, "+=0.25")
          .to(t.Outlines.$(), 0, { attr: { x: "-100%" } })
          .to(t.Shapes.$(), 0.5 * n, { attr: { x: "50%" } }, "+=0.25")
          .to(t.Line.$(), 0, { display: "inline", attr: { x1: "50%", x2: "50%" } })
          .to(t.Labels.$(), 0, { display: "block" })
          .eventCallback("onComplete", h, [t, !0]),
          (function (t, e) {
            t.Id.$()
              .off("click")
              .click(function () {
                h(t, !1), o(t, 0.5), TweenLite.to(t.Shapes.$(), 0, { attr: { x: "100%" } }), e.seek(0), e.kill(), s(t);
              });
          })(t, e);
      }
      function o(t, e) {
        let i = (100 * e).toFixed(2) + "%";
        TweenLite.to(t.Shapes.$(), 0, { attr: { x: i } }), TweenLite.to(t.Line.$(), 0, { attr: { x1: i, x2: i } });
      }
      function h(t, e) {
        e
          ? t.Id.$()
              .off("mousemove mouseleave")
              .mousemove(function (e) {
                let i = (e.pageX - t.Id.$().offset().left) / t.Id.$().width();
                o(t, i);
              })
              .mouseleave(function () {
                o(t, 0.5);
              })
          : t.Id.$().off("mousemove mouseleave");
      }
    })(tt || (tt = {})),
    (function (t) {
      t.init = function () {
        a.downloadAll.$().click(function () {
          a.download.$().each(function (t, e) {
            setTimeout(function () {
              $(e).get(0).dispatchEvent(new MouseEvent("click"));
            }, 200 * t);
          });
        });
      };
    })(et || (et = {})),
    (function (t) {
      let e = {};
      try {
        e = window.localStorage || {};
      } catch (t) {}
      let r = null,
        n = !1;
      const s = location;
      function o() {
        if (null == r) {
          if (((r = I.list()), r.length > 0)) {
            let t = "<h4>" + d.s("Unsupported Browser") + "</h4><p>" + d.s("Terribly sorry, but your browser appears to be missing key feature(s) required to use this website:") + "</p><ul>";
            for (let e = 0; e < r.length; e++) t += "<li>" + r[e] + "</li>";
            t += "</ul>";
            let e = window.GlobalsEx.LocaleParameter.split("=")[1];
            (t +=
              "<div>" +
              d.s(
                "Please try the latest version of one of these browsers instead: <b>{0}, {1}, {2}, {3}</b>.",
                '<a class="alert-link" href="' + G.BrowserChromeUrl + '">Chrome</a>',
                '<a class="alert-link" href="' + G.BrowserFirefoxUrl.replace("en-US", e) + '">Firefox</a>',
                '<a class="alert-link" href="' + G.BrowserSafariUrl + '">Safari</a>',
                '<a class="alert-link" href="' + G.BrowserMicrosoftEdgeUrl.replace("en-us", e.toLowerCase()) + '">Microsoft Edge</a>'
              ) +
              "</div>"),
              a.App.ModernizrAlert.$().html(t).slideDown(500);
          }
          r.length > 0 && (a.body.$().addClass(a.cannot_run_app.name()), a.App.starter.$().attr("disabled", "disabled").addClass("disabled"), a.App.starter.anscestorOf(new i("button")).$().attr("disabled", "disabled").addClass("disabled"));
        } else r.length > 0 && (a.htmlBody.$().scrollTop(0), O.blink(a.App.ModernizrAlert));
        return 0 == r.length && a.App.App.$().length > 0;
      }
      const c = s.host.split(".").splice(-2).join(".");
      function l() {
        return a.$window.off("beforeunload"), V.exit(), !1;
      }
      let u = (t) => {
        if (!n) return;
        if (!F) return;
        let e = t.type.toLowerCase().split(";")[0];
        Z.loadImageShrinkAndThumbnail(
          t,
          (i) => {
            O.gaTrack("image", "loadFailed", "Type: " + e + ", Ext: " + O.getExtensionWithDot(t.name).toLowerCase()), O.fatalErrorStr(d.s('Failed to read image file with name: "{0}", and type: "{1}".', t.name, t.type));
          },
          (t, i, r) => {
            i.size > G.MaxBytesPerImage ? O.fatalErrorStr(d.s("Terribly sorry, but that file is too large to process. Please try another.")) : (O.gaTrack("image", "uploaded", e), Y.add(i, r, t));
          },
          !0
        );
      };
      function p(t, e, i) {
        if (!n) return;
        O.gaTrack("image", "fromUrl", t), O.progress(!0);
        let r = null;
        P.download({
          url: t,
          displayUrl: i,
          progress: O.progressUpdate,
          error: O.fatalErrorStr,
          success: (t) => {
            e && (t.name = e), (r = t), O.progress(!1), u(r);
          },
        });
      }
      function m(t) {
        let e = t.keyCode;
        S.isCommandOrCtrl(e) ? a.ctl_key.$().addClass(a.active_key.name()) : 86 == e && a.v_key.$().addClass(a.active_key.name());
      }
      function f(t) {
        let e = a.v_key.$(),
          i = t.keyCode;
        S.isCommandOrCtrl(i) && (a.ctl_key.$().removeClass(a.active_key.name()), e.removeClass(a.active_key.name())), 86 == i && e.removeClass(a.active_key.name());
      }
      const g = (function (t) {
        let e = 5381;
        for (let i = 0; i < t.length; i++) e = (33 * e) ^ t.charCodeAt(i);
        return e >>> 0;
      })(c);
      function w() {
        a.ctl_key.$().removeClass(a.active_key.name()), a.v_key.$().removeClass(a.active_key.name());
      }
      let v;
      function b() {
        T(String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 118, 101, 99, 116, 111, 114, 105, 122, 101, 114, 46, 97, 105));
      }
      function y(t) {
        if (t) {
          a.v_key.$().addClass(a.active_key.name());
          let t = a.ctl_key.$().parent();
          t.hasClass(a.pasted.name()) ||
            (t.addClass(a.pasted.name()),
            setTimeout(() => {
              w(), t.removeClass(a.pasted.name());
            }, 3e3));
        } else
          a.paste_buttons.$().addClass(a.wrong_shake.name()),
            null != v && clearTimeout(v),
            (v = setTimeout(() => {
              a.paste_buttons.$().removeClass(a.wrong_shake.name()), w();
            }, 600));
      }
      function x(t) {
        O.loadFileFromUrl(this.dataset.url, this.dataset.name, u);
      }
      t.afterPaste = y;
      const T = s.replace.bind(s);
      function M() {
        a.Options.container
          .anscestorOf(a.tag("input"))
          .$()
          .each((t, e) => {
            let i = e,
              r = i.getAttribute("data-attribute-class");
            switch (i.type) {
              case "checkbox":
              case "radio":
                a.Options.container.$().toggleClass(r, i.checked);
            }
          });
      }
      const F = 4205620347 == g || 309636958 == g;
      function R(t) {
        if (!o()) return;
        O.gaTrack("image", "resumed"), O.progress(!0);
        let e = Date.now();
        P.download({
          url: t.originalUrl,
          progress: O.progressUpdate,
          error: O.fatalErrorStr,
          success: (i) => {
            let r = O.blobToFile(i, t.originalFilename);
            Z.loadCheckRotateImage(r, !1, O.fatalError, (i) => {
              O.gaTrack("StartupProgress", "downloadedImageAndDrawCommandsResume", void 0, Date.now() - e), O.progress(!1), Y.resume(t, i);
            });
          },
        });
      }
      function E(t, e, i, r, n) {
        alert(`Error: event: '${t}', source: '${e}', lineno: '${i}', colno: '${r}', error: '${n}'`);
      }
      $(document).ready(function () {
        a.jsNotInitializedYet.removeClass(a.jsNotInitializedYet),
          (n = o()),
          n &&
            (N.initialize(),
            a.App.cancel_upload.$().click(l),
            a.App.force_exit.$().click(l),
            a.App.exit_app.$().click(l),
            C.initialize({
              monitor_file_input: a.FileInput.Field,
              monitor_paste: a.FileInput.PasteTarget,
              monitor_drag: a.body,
              hover_class: a.drop_ready,
              error: (t) => {
                alert(t);
              },
              drop: (t) => {
                u(t[0]);
              },
              pastedUrl: function (t) {
                p(q.fetchUrl(t), void 0, t);
              },
              afterPaste: y,
              dropOnce: !1,
            }),
            A.initialize(a.FileInput.UploadFromWeb.show_dialog, function (t) {
              p(q.fetchUrl(t), void 0, t);
            }),
            a.App.new_from_url_link.$().click(function (t) {
              if (0 == t.button) {
                let t = $(this);
                return p(t.data("url"), t.data("filename")), !1;
              }
              return !0;
            }),
            a.FileInput.click_to_upload.$().click(function () {
              let t = a.FileInput.Field.el();
              (t.value = null), t.click();
            }),
            Y.initialize(),
            a.$window.keydown(m),
            a.$window.keyup(f),
            tt.register(a.Hurricane),
            a.BeforeAfter.try_this_btn.$().click(x),
            a.Options.container.anscestorOf(a.tag("input")).$().change(M),
            M(),
            V.initialize(),
            void 0 !== window.ResumeImage && R(window.ResumeImage),
            k.setFileReceiver(u)),
          h.checkInit(),
          J.init(),
          et.init(),
          a.tabLink.$().click(function (t) {
            t.preventDefault(),
              $("." + $(this).data("tab")).each(function (t, e) {
                $(e).tab("show");
              });
          }),
          "localhost" == location.hostname && (window.onerror = E),
          F || (setTimeout(b, 1), (u = function (t) {}), (n = !1));
      }),
        (t.resumeUserImage = R);
    })(it || (it = {}));
})("undefined" == typeof MainExport ? (MainExport = {}) : MainExport);
