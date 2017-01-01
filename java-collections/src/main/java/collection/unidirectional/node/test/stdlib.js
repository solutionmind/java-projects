dojo.provide("stdlib.behavior.AutoSuggest.SuggestNavigationBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.AutoSuggest.SuggestNavigationBehavior",
		mojo.command.Behavior, {
			suggestionIndex : -1,
			suggestion : null,
			execute : function(j) {
				var f = j.getEvent();
				var c = 38;
				var h = 40;
				var g = 9;
				var b = j.getParams().suggestions;
				var a = b.length;
				if (b[0] && b[0].innerHTML.indexOf("!{suggestion}") != -1) {
					a = 0
				}
				this.suggestionIndex = -1;
				for (var d = 0; d < a; d++) {
					if ($(b[d]).hasClass("selected")) {
						this.suggestionIndex = d;
						break
					}
				}
				if (f && f.which) {
					f = f;
					characterCode = f.which
				} else {
					f = event;
					characterCode = f.keyCode
				}
				if (a > 0) {
					switch (characterCode) {
					case c:
						this.suggestionIndex--;
						if (this.suggestionIndex < 0) {
							this.suggestionIndex = a - 1
						}
						this.suggestion = b[this.suggestionIndex];
						this.onNav();
						break;
					case h:
						this.suggestionIndex++;
						if (this.suggestionIndex >= a) {
							this.suggestionIndex = 0
						}
						this.suggestion = b[this.suggestionIndex];
						this.onNav();
						break
					}
				}
			},
			onNav : function() {
			}
		});
dojo.provide("stdlib.behavior.ClearFormBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.ClearFormBehavior", mojo.command.Behavior, {
	execute : function(a) {
		var b = a.getParams();
		var j = a.contextObj;
		var k = false;
		var c = false;
		var e = false;
		if (!b) {
			b = {}
		}
		if (b.noload != null) {
			k = b.noload
		}
		if (b.formSet != null) {
			j = b.formSet
		}
		if (b.clearHidden != null) {
			c = b.clearHidden
		}
		if (b.clearImages != null) {
			e = b.clearImages
		}
		if (!k) {
			var f = mojo.query("input", j);
			for (var d = 0; d < f.length; d++) {
				switch (f[d].type) {
				case "hidden":
					if (c) {
						f[d].value = ""
					}
					break;
				case "image":
					if (e) {
						f[d].value = ""
					}
					break;
				case "checkbox":
					if (f[d].checked) {
						f[d].checked = false
					}
					break;
				case "radio":
					if (f[d].checked) {
						f[d].checked = false
					}
					break;
				case "button":
					break;
				case "submit":
					break;
				default:
					f[d].value = ""
				}
			}
			var h = mojo.query("textarea", j);
			for (var d = 0; d < h.length; d++) {
				h[d].value = ""
			}
			var g = mojo.query("select", j);
			for (var d = 0; d < g.length; d++) {
				g[d].selectedIndex = 0
			}
		}
	}
});
dojo.provide("stdlib.behavior.DisableBoxBehavior");
dojo.require("mojo.command.Behavior");
dojo
		.declare(
				"stdlib.behavior.DisableBoxBehavior",
				mojo.command.Behavior,
				{
					_box : null,
					execute : function(d) {
						var c = d.getParams();
						if (!this._box) {
							this._box = mojo.queryFirst("#disablebox");
							if (!this._box) {
								this._box = document.createElement("div");
								this._box.id = "disablebox";
								document.body.appendChild(this._box);
								this._box.style.position = "absolute"
							}
						}
						this._box.innerHTML = "";
						if (d.getParams().show) {
							var a = document.createElement("div");
							a.className = c.throbberClass || "throbber";
							if (d.getParams().target) {
								var b = $(d.getParams().target);
								this._box.style.top = $(b).offset().top + "px";
								this._box.style.left = $(b).offset().left
										+ "px";
								this._box.style.width = $(b).width() + "px";
								this._box.style.height = $(b).height() + "px";
								a.style.left = (($(b).width() / 2) - 16) + "px";
								a.style.top = (($(b).height() / 2) - 16) + "px";
								this._box.appendChild(a)
							} else {
								var b = {
									h : 0,
									w : 0
								};
								this._box.style.top = "0px";
								this._box.style.left = "0px";
								this._box.style.width = "100%";
								this._box.style.height = (document.all) ? document.body.offsetHeight
										+ "px"
										: "100%";
								a.style.left = ((b.w / 2) - 16) + "px";
								a.style.top = ((b.h / 2) - 16) + "px";
								this._box.appendChild(a)
							}
							this._box.style.zIndex = "9999";
							this._box.style.display = "block"
						} else {
							this._box.style.display = "none"
						}
					}
				});
dojo.provide("stdlib.behavior.DragBehavior");
dojo.require("mojo.command.Behavior");
dojo
		.declare(
				"stdlib.behavior.DragBehavior",
				mojo.command.Behavior,
				{
					selectedIndex : 0,
					execute : function(a) {
						var j = a.getParams();
						var o = a.eventObj, g = j.element, p = j.draggable, c = j.container, d = j.orientation, k = j.tickSize, m, h, f, b, l;
						if (d == "vertical") {
							m = $(c).offset().top;
							h = $(c).height();
							f = $(g).height();
							b = "top";
							if (typeof j.position != "undefined"
									&& !isNaN(parseInt(j.position))) {
								l = j.position + m
							} else {
								l = o.clientY
							}
						} else {
							m = $(c).offset().left;
							h = $(c).width();
							f = $(g).width();
							b = "left";
							if (typeof j.position != "undefined"
									&& !isNaN(parseInt(j.position))) {
								l = j.position + m
							} else {
								l = o.clientX
							}
						}
						var n = m + h - f;
						if (l >= n) {
							g.style[b] = (h - f - 3) + "px"
						} else {
							if (l <= m + 1) {
								g.style[b] = 0 + "px"
							} else {
								if (k) {
									var e = (l - m);
									this.selectedIndex = Math.round(e / k);
									g.style[b] = this.selectedIndex * k + "px"
								} else {
									g.style[b] = (l - m) + "px"
								}
							}
						}
					}
				});
dojo.provide("stdlib.behavior.EnterKeyBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.EnterKeyBehavior", mojo.command.Behavior, {
	execute : function(c) {
		var b = c.eventObj;
		var a;
		if (b && b.which) {
			b = b;
			a = b.which
		} else {
			b = event;
			a = b.keyCode
		}
		if (a == 13) {
			this.onResponse();
			return false
		} else {
			return true
		}
	},
	onResponse : function() {
	}
});
dojo.provide("stdlib.behavior.MessagingBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.MessagingBehavior", mojo.command.Behavior, {
	execute : function(a) {
		mojo.Messaging.publish(a.paramsObj.topic, a.paramsObj.message)
	}
});
dojo.provide("stdlib.behavior.PreventDefaultEventBehavior");
dojo.require("mojo.command.Command");
dojo.declare("stdlib.behavior.PreventDefaultEventBehavior",
		mojo.command.Command, {
			execute : function(b) {
				try {
					var a = b.eventObj;
					if (a.preventDefault) {
						a.preventDefault()
					}
					if (a.stopPropagation) {
						a.stopPropagation()
					}
					a.returnValue = false;
					return false
				} catch (a) {
				}
			}
		});
dojo.provide("stdlib.behavior.RedirectBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.RedirectBehavior", mojo.command.Behavior, {
	execute : function(e) {
		var d = e.getParams();
		var c = 25;
		if (d) {
			var b = d.url;
			var a = d.removeHash || false;
			var c = d.delay || 25
		}
		if (!b) {
			if (a) {
				window.location = window.location.href.replace(/#.*/, "");
				setTimeout("window.location.reload()", 750)
			} else {
				window.location.reload()
			}
		} else {
			setTimeout(function() {
				window.location.href = b
			}, c)
		}
	}
});
dojo.provide("stdlib.behavior.RefreshBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.RefreshBehavior", mojo.command.Behavior, {
	execute : function(a) {
		if (a.getParams()) {
			if (a.getParams().removeHash) {
				window.location = window.location.href.replace(/#.*/, "");
				setTimeout("window.location.reload()", 750)
			}
		} else {
			window.location.reload()
		}
	}
});
dojo.provide("stdlib.behavior.RemoveElementsBehavior");
dojo.declare("stdlib.behavior.RemoveElementsBehavior", mojo.command.Behavior, {
	execute : function(g) {
		var a;
		var c;
		var e;
		var f;
		var d = g.paramsObj;
		if (d) {
			if (d.className != null) {
				a = d.className
			}
			if (d.targetId != null) {
				c = d.targetId
			}
			if (d.target != null) {
				e = d.target
			}
		}
		if ((a != null) && (c != null || e != null)) {
			if (c && !e) {
				if (c.indexOf("#") != 0) {
					c = "#" + c
				}
				e = mojo.queryFirst(c)
			}
			f = mojo.query(a, e);
			if (f) {
				if (f.length > 0) {
					for (var b = 0; b < f.length; b++) {
						if ((f[b]) && (f[b].parentNode)) {
							f[b].parentNode.removeChild(f[b])
						}
					}
				} else {
					if ((f) && (f.parentNode)) {
						f.parentNode.removeChild(f)
					}
				}
			}
		}
	}
});
dojo.provide("stdlib.behavior.SubmitFormBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.SubmitFormBehavior", mojo.command.Behavior, {
	execute : function(b) {
		var a = b.getParams();
		if (a && a.form) {
			if (a.form.tagName.toLowerCase() != "form") {
				a.form = mojo.queryFirst("form", a.form)
			}
			a.form.submit()
		}
	}
});
dojo.provide("stdlib.behavior.TweenBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.TweenBehavior", mojo.command.Behavior, {
	onComplete : function(b, a, c) {
		if (c == "vertical") {
			if (b) {
				$(b).height() == 0 ? b.style.height = 0 : $(b).css("height",
						"auto")
			}
		} else {
			if (b) {
				$(b).css({
					left : a + "px"
				})
			}
		}
	},
	onStart : function() {
	},
	execute : function(h) {
		var d = {};
		var f;
		if (h.getParams().width != null) {
			d.width = h.getParams().width
		}
		if (h.getParams().height != null) {
			d.height = h.getParams().height
		}
		if (h.getParams().x != null) {
			d.left = h.getParams().x
		}
		if (h.getParams().y != null) {
			d.top = h.getParams().y
		}
		if (h.getParams().duration != null) {
			f = h.getParams().duration
		} else {
			f = 600
		}
		var e = h.getParams().element;
		if (!$.isArray(e)) {
			e = [ e ]
		}
		var a = e.length;
		var g = this;
		for (var c = 0; c < a; c++) {
			if (e[c]) {
				var b = e[c];
				if (e[c].style.height == "auto" && d.height != null) {
					e[c].style.height = $(e[c]).height() + "px"
				}
				if (d.height != undefined) {
					$(e[c]).animate({
						height : d.height
					}, f, function() {
						g.onComplete(b, 0, "vertical")
					})
				} else {
					$(e[c]).animate({
						left : d.left
					}, f, function() {
						g.onComplete(e[c], d.left, "horizontal")
					})
				}
			}
		}
	}
});
dojo.provide("stdlib.behavior.UpdateCssClassBehavior");
dojo.require("mojo.command.Behavior");
dojo
		.declare(
				"stdlib.behavior.UpdateCssClassBehavior",
				mojo.command.Behavior,
				{
					execute : function(h) {
						if (!h.paramsObj) {
							return
						}
						var e;
						var f = h.paramsObj.element;
						var g = h.paramsObj.action;
						var b = h.paramsObj.cssClass;
						if (!f) {
							return
						} else {
							if (typeof f == "object") {
								if ($.isArray(f) && f.length > 0) {
									for (var d = 0; d < f.length; d++) {
										if (typeof f[d] != "object") {
											throw new Error(
													"ERROR stdlib.behavior.UpdateCssClassBehavior - element parameter is not an array of type Object");
											break
										}
									}
								}
							} else {
								throw new Error(
										"ERROR stdlib.behavior.UpdateCssClassBehavior - element parameter is not a type Object")
							}
						}
						if (g == null || typeof g == "undefined") {
							throw new Error(
									"ERROR stdlib.behavior.UpdateCssClassBehavior - action parameter is required")
						} else {
							if (typeof g != "string") {
								throw new Error(
										"ERROR stdlib.behavior.UpdateCssClassBehavior - action parameter is not a type String")
							} else {
								if ((g != "add") && (g != "remove")
										&& (g != "set") && (g != "toggle")) {
									throw new Error(
											"ERROR stdlib.behavior.UpdateCssClassBehavior - action parameter is invalid")
								}
							}
						}
						if (b == null || typeof b == "undefined") {
							throw new Error(
									"ERROR stdlib.behavior.UpdateCssClassBehavior - CssClass parameter is required")
						} else {
							if (typeof b == "object") {
								if (b.length > 0) {
									for (var d = 0; d < b.length; d++) {
										if (typeof b[d] != "string") {
											throw new Error(
													"ERROR stdlib.behavior.UpdateCssClassBehavior - CssClass parameter is not an array of type String");
											break
										}
									}
								}
							} else {
								if (typeof b != "string") {
									throw new Error(
											"ERROR stdlib.behavior.UpdateCssClassBehavior - CssClass parameter is not a type String")
								}
							}
						}
						if (f) {
							var a = function(j) {
								if (!j.constructor
										|| j.constructor.toString()
												.toLowerCase().indexOf("array") == -1) {
									return false
								}
								return true
							};
							if (!a(f)) {
								f = [ f ]
							}
							if (!a(b)) {
								b = [ b ]
							}
							cssLength = b.length;
							e = f.length;
							for (var d = 0; d < e; d++) {
								elm = f[d];
								for (var c = 0; c < cssLength; c++) {
									css = b[c];
									if (g.length > 0) {
										switch (g) {
										case "add":
											$(elm).addClass(css);
											break;
										case "remove":
											$(elm).removeClass(css);
											break;
										case "set":
											elm.className = "";
											$(elm).addClass(css);
											break;
										case "toggle":
											$(elm).toggleClass(css);
											break
										}
									}
								}
							}
						}
					},
					onResponse : function() {
					}
				});
dojo.provide("stdlib.behavior.UpdateFormFieldBehavior");
dojo.require("mojo.command.Behavior");
dojo
		.declare(
				"stdlib.behavior.UpdateFormFieldBehavior",
				mojo.command.Behavior,
				{
					execute : function(v) {
						var f;
						var c = new Array();
						var b = new Array();
						var n = [ "INPUT", "SELECT", "TEXTAREA" ];
						var u = v.getParams();
						if (!u) {
							u = {}
						}
						var l = u.fields;
						if (u.formId != null) {
							f = mojo.queryFirst("#" + u.formId)
						}
						if (u.formObj != null) {
							f = u.formObj
						}
						if (f) {
							for (var s = 0, q = n.length; s < q; s++) {
								var d = mojo.query(n[s], f);
								for (var r = 0, t = d.length; r < t; r++) {
									c.push(d[r])
								}
							}
							for (var s = 0, q = l.length; s < q; s++) {
								var e = l[s].name;
								var w = l[s].value;
								for (var r = 0, t = c.length; r < t; r++) {
									var m = false;
									if (c[r].tagName.toUpperCase() == "SELECT") {
										if (c[r].name == e) {
											for (var p = 0, a = c[r].options.length; p < a; p++) {
												var h = c[r].options[p];
												if (h.value == w) {
													c[r].selectedIndex = p
												}
											}
										}
									} else {
										if (c[r].tagName.toUpperCase() == "TEXTAREA") {
											if (c[r].name == e) {
												if (c[r].value == w) {
													m = true
												}
												if (c[r].innerHTML == w) {
													m = true
												}
												c[r].value = w;
												c[r].innerHTML = w
											}
										} else {
											if (c[r].tagName.toUpperCase() == "INPUT") {
												if (c[r].name == e) {
													if ((c[r].type == "radio")
															|| (c[r].type == "checkbox")) {
														if (c[r].value == w) {
															c[r].checked = "checked"
														} else {
															c[r].checked = ""
														}
													} else {
														if ((c[r].type == "text")
																|| (c[r].type == "password")
																|| (c[r].type == "hidden")) {
															if (c[r].value != w) {
																m = true
															}
															c[r].value = w
														}
													}
												}
											}
										}
									}
									if (m) {
										if (c[r].fireEvent) {
											c[r].fireEvent("onchange")
										}
										if (document.createEvent) {
											var g = document
													.createEvent("HTMLEvents");
											if (g.initEvent) {
												g.initEvent("change", true,
														true)
											}
											if (c[r].dispatchEvent) {
												c[r].dispatchEvent(g)
											}
										}
									}
								}
							}
						}
					}
				});
dojo.provide("stdlib.behavior.dialog.DialogBehavior");
dojo.require("mojo.command.Behavior");
dojo
		.declare(
				"stdlib.behavior.dialog.DialogBehavior",
				mojo.command.Behavior,
				{
					onComplete : function() {
					},
					onDataReady : function() {
					},
					_onDataReady : function(f) {
						this.onDataReady();
						var c = mojo.queryFirst(f.elContent);
						var b = mojo.queryFirst(f.elContainer);
						var e = mojo.queryFirst(f.elTitle);
						var a = mojo.query("embed, object");
						e.innerHTML = f.title;
						if ($.browser.mozilla
								&& (navigator.appVersion.indexOf("Mac") != -1)) {
							this.hideFlash(a)
						}
						b.style.visibility = "";
						if (window.PIE) {
							var d = $(
									".dialog-component .dialog-component-buttons")
									.find("a")[0];
							$(d).removeClass("button");
							$(d).addClass("button")
						}
						this.onComplete()
					},
					execute : function(a) {
						var f = a.getParams();
						if (!f.elContainer) {
							f.elContainer = ".dialog-component"
						}
						if (!f.elContent) {
							f.elContent = ".dialog-component-content"
						}
						if (!f.elTitle) {
							f.elTitle = ".dialog-component-title"
						}
						var j = mojo.query("embed, object");
						var d = mojo.queryFirst("#underlay");
						if (!d) {
							d = document.createElement("div");
							d.id = "underlay";
							document.body.appendChild(d);
							d.style.display = "block"
						}
						$("#pf-container").addClass("no-print");
						var b = mojo.queryFirst(f.elContainer);
						if (!b) {
							b = $("<div class='dialog-component'>" +
									"<div class='dialog-component-head'><span class='btn-close' title='Close'></span></div>" +
									"<div class='dialog-component-title'></div>" +
									"<div class='dialog-component-content'></div>" +
									"</div>");
							$("body").append(b)
						}
						$(b).addClass(f.classes);
						if (f.disableClose) {
							$(".dialog-component-head").addClass(
									"disable-close");
							$(".dialog-component-head span").removeClass(
									"btn-close")
						} else {
							$(".dialog-component-head").removeClass(
									"disable-close");
							$(".dialog-component-head span").addClass(
									"btn-close")
						}
						var k = mojo.queryFirst(f.elContent);
						var m = mojo.queryFirst(f.elTitle);
						var c = this;
						if (f.enabled && f.width && f.height) {
							$(b).css("width", f.width + "px");
							$(b)
									.css(
											"height",
											(f.height == -1) ? "auto"
													: f.height + "px");
							d.style.display = "block";
							$(b).css("visibility", "hidden");
							$(b).css("display", "block");
							var e = (typeof (f.xhrTimeout) != "undefined") ? f.xhrTimeout
									: "30000";
							if (f.href) {
								$
										.ajax({
											url : f.href,
											type : "GET",
											dataType : "text",
											timeout : e,
											cache : false,
											success : function(s) {
												k.innerHTML = s;
												if (f.substitutionMap) {
													for ( var q in f.substitutionMap) {
														var r = $(q, k);
														for (i = 0; i < r.length; i++) {
															r[i].innerHTML = f.substitutionMap[q]
														}
													}
												}
												c._onDataReady(f)
											},
											error : function() {
												k.innerHTML = "<div class='msgAdvisory'><p>We're unable to load this content.</p></div>";
												c._onDataReady(f)
											}
										})
							} else {
								if (f.xhrPost) {
									$
											.ajax({
												url : f.xhrPost,
												type : "POST",
												data : $(f.form).serialize(),
												timeout : e,
												success : function(q) {
													k.innerHTML = q;
													c._onDataReady(f)
												},
												error : function() {
													k.innerHTML = "<div class='msgAdvisory'><p>We're unable to load this content.</p></div>";
													c._onDataReady(f)
												}
											})
								} else {
									if (f.id) {
										var g = mojo.queryFirst(f.id);
										k.innerHTML = g.innerHTML;
										c._onDataReady(f)
									} else {
										if (f.element) {
											k.style.height = (f.height == -1) ? "auto"
													: (f.height - 52) + "px";
											f.element.origParent = f.element.parentNode;
											var p = f.element.parentNode;
											f.element.origParent.style.height = $(
													p).height()
													+ "px";
											var l = document
													.createElement("div");
											l.className = "hide";
											l.id = "dialog-return-breadcrumb";
											f.element.parentNode.insertBefore(
													l, f.element);
											k.appendChild(f.element);
											if (f.substitutionMap) {
												for ( var o in f.substitutionMap) {
													var h = $(o, k);
													for (i = 0; i < h.length; i++) {
														h[i].innerHTML = f.substitutionMap[o]
													}
												}
											}
											c._onDataReady(f)
										} else {
											if (f.scriptText) {
												k.innerHTML = f.text;
												c._onDataReady(f)
											} else {
												k.innerHTML = "<div class='msgAdvisory'><p>We're unable to load this content.</p></div>";
												c._onDataReady(f);
												throw new Error(
														"stdlib.behavior.dialog.DialogBehavior - Unable to find the Dialog content")
											}
										}
									}
								}
							}
							if ($.browser.msie) {
								mojo.queryFirst("html").style.overflowX = "hidden"
							} else {
								document.body.style.overflowX = "hidden"
							}
						} else {
							if (k.firstChild && k.firstChild.origParent) {
								var n = k.firstChild.origParent;
								n
										.replaceChild(
												k.firstChild,
												document
														.getElementById("dialog-return-breadcrumb"));
								n.style.height = "";
								n.style.width = ""
							}
							if ($.browser.mozilla
									&& (navigator.appVersion.indexOf("Mac") != -1)) {
								this.showFlash(j)
							}
							k.innerHTML = "";
							k.style.height = "";
							d.style.display = "none";
							$(b).css("display", "none");
							$("#pf-container").removeClass("no-print");
							if ($.browser.msie) {
								mojo.queryFirst("html").style.overflowX = "auto"
							} else {
								document.body.style.overflowX = "auto"
							}
						}
					},
					hideFlash : function(c) {
						for (var b = 0, a = c.length; b < a; b++) {
							c[b].style.display = "none"
						}
					},
					showFlash : function(c) {
						for (var b = 0, a = c.length; b < a; b++) {
							c[b].style.display = "block"
						}
					}
				});
dojo.provide("stdlib.behavior.dialog.EscapeKeyBehavior");
dojo.require("mojo.command.Behavior");
dojo.declare("stdlib.behavior.dialog.EscapeKeyBehavior", mojo.command.Behavior,
		{
			execute : function(c) {
				var b = c.eventObj;
				var a;
				if (b && b.which) {
					b = b;
					a = b.which
				} else {
					b = event;
					a = b.keyCode
				}
				if (a == 27) {
					this.onResponse();
					return false
				} else {
					return true
				}
			},
			onResponse : function() {
			}
		});
dojo.provide("stdlib.behavior.dialog.PositionBehavior");
dojo.require("mojo.command.Behavior");
dojo
		.declare(
				"stdlib.behavior.dialog.PositionBehavior",
				mojo.command.Behavior,
				{
					execute : function(a) {
						var e = a.getParams();
						var c = mojo.queryFirst("#underlay");
						var b = mojo.queryFirst(".dialog-component");
						var j = mojo
								.queryFirst(".dialog-component .dialog-component-content");
						if (!b || !c || !j) {
							return
						}
						var d = {};
						var k = 0;
						if (typeof window.innerWidth != "undefined") {
							d.w = window.innerWidth;
							d.h = window.innerHeight;
							k = window.pageYOffset + window.innerHeight
						} else {
							if (typeof document.documentElement != "undefined"
									&& typeof document.documentElement.clientWidth != "undefined"
									&& document.documentElement.clientWidth != 0) {
										d.w = document.documentElement.clientWidth,
										d.h = document.documentElement.clientHeight;
								k = document.documentElement.scrollTop
										+ document.documentElement.clientHeight
							} else {
								d.w = document.body.clientWidth;
								d.h = document.body.clientHeight;
								k = document.body.scrollTop
										+ document.body.clientHeight
							}
						}
						c.style.height = $(mojo.queryFirst("body")).height()
								+ "px";
						var f = Math.round(k - (d.h / 2)
								- ($(b).outerHeight() / 2));
						var g = Math.round((d.w / 2) - ($(b).outerWidth() / 2));
						b.style.top = f + "px";
						b.style.left = g + "px";
						if ($(b).outerHeight() > d.h) {
							b.style.top = k - d.h + "px";
							window.mojoObservers.onscroll = null
						}
						var h;
						if (h = mojo.queryFirst("iframe", c)) {
							h.style.top = $(b).offset().top + "px";
							h.style.left = $(b).offset().left + "px";
							h.style.width = $(b).outerWidth() + "px";
							h.style.height = $(b).outerHeight() + "px"
						}
					}
				});
dojo.provide("stdlib.command.AutoSuggest.GetSuggestionsCommand");
dojo.require("mojo.command.Command");
dojo.require("mojo.Model");
dojo
		.declare(
				"stdlib.command.AutoSuggest.GetSuggestionsCommand",
				mojo.command.Command,
				{
					inputValue : null,
					_clearTimeout : null,
					_lastValue : null,
					execute : function(requestObj) {
						if (requestObj.getParams().inputValue) {
							this.inputValue = requestObj.getParams().inputValue
									.replace(/\s*$/g, "");
							clearTimeout(this._clearTimeout);
							if (this.inputValue.length > 0) {
								var thisObj = this;
								dojo
										.require(requestObj.getParams().serviceLocator);
								this._clearTimeout = setTimeout(
										function() {
											var locator = eval(requestObj
													.getParams().serviceLocator);
											locator
													.getInstance()
													.getService(
															requestObj
																	.getParams().serviceName)
													.invoke(
															{
																inputValue : thisObj.inputValue
															}, thisObj)
										}, 400)
							} else {
								mojo.Model.remove(requestObj.getParams().model)
							}
						}
					},
					onResponse : function(c) {
						var j = (this.getRequest().getParams().inputValue).length;
						var e = (this.getRequest().getParams().modelPath) ? "."
								+ this.getRequest().getParams().modelPath : "";
						var f = (this.getRequest().getParams().maxSuggestions);
						var a = c[this.getRequest().getParams().modelPath];
						var b = [];
						for (i = 0; i < a.length; i++) {
							var d = new RegExp("^" + this.inputValue);
							if (d.test(a[i].suggestion)) {
								var g = a[i].suggestion.substring(0, j);
								var h = a[i].suggestion.substring(j,
										a[i].suggestion.length);
								if (b.length < f) {
									b.push(a[i]);
									a[i].suggestionFormatted = "<strong>" + g
											+ "</strong>" + h
								}
							}
						}
						if (b.length < 1) {
							mojo.Model.remove(
									this.getRequest().getParams().model, b)
						} else {
							mojo.Model.set(this.getRequest().getParams().model,
									b)
						}
					},
					onError : function(a) {
					}
				});
dojo.provide("stdlib.command.ClearModelCommand");
dojo.require("mojo.Model");
dojo
		.declare(
				"stdlib.command.ClearModelCommand",
				mojo.command.Command,
				{
					execute : function(c) {
						var a = c.paramsObj.model;
						if (a == null || typeof a == "undefined") {
							throw new Error(
									"ERROR stdlib.command.ClearModelCommand - model parameter is required")
						} else {
							if (typeof a == "array" || typeof a == "object") {
								if (a.length > 0) {
									for (var b = 0; b < a.length; b++) {
										if (typeof a[b] != "string") {
											throw new Error(
													"ERROR stdlib.command.ClearModelCommand - model parameter is not an array of type String");
											break
										}
									}
								}
							} else {
								if (typeof a == "string") {
									if (a == "") {
										throw new Error(
												"ERROR stdlib.command.ClearModelCommand - model parameter must be a non-empty string")
									}
								} else {
									throw new Error(
											"ERROR stdlib.command.ClearModelCommand - model parameter is not a type String")
								}
							}
						}
						if (a) {
							if (typeof (a) == "string") {
								a = [ a ]
							}
							if ($.isArray(a)) {
								for (b = 0; b < a.length; b++) {
									mojo.Model.remove(a[b])
								}
							}
						}
					}
				});
dojo.provide("stdlib.command.GenericServiceCommand");
dojo.require("mojo.command.Command");
dojo
		.declare(
				"stdlib.command.GenericServiceCommand",
				mojo.command.Command,
				{
					_model : null,
					execute : function(requestObj) {
						var params = requestObj.getParams();
						if (!params) {
							console
									.log("stdlib.command.GenericServiceCommand - Warning - No params passed.")
						}
						this._model = params.model;
						dojo.require(params.serviceLocator);
						(eval(params.serviceLocator)).getInstance().getService(
								params.serviceName).invoke(
								params.serviceParams, this)
					},
					onResponse : function(a) {
						if (this._model) {
							mojo.Model.set(this._model, a)
						}
					},
					onError : function(a) {
						if (this._model) {
							mojo.Model.set(this._model + ".errors", a)
						}
					}
				});
dojo.provide("stdlib.command.InsertIntoModelCommand");
dojo.require("mojo.command.Command");
dojo.require("mojo.Model");
dojo
		.declare(
				"stdlib.command.InsertIntoModelCommand",
				mojo.command.Command,
				{
					execute : function(a) {
						var c;
						var f;
						var j;
						var e;
						var h = false;
						var g = a.getParams();
						if (!g) {
							g = {}
						}
						if (g.model != null) {
							c = g.model
						}
						if (g.index != null) {
							f = g.index
						}
						if (g.value != null) {
							j = g.value
						}
						if (c == null || typeof c == "undefined") {
							throw new Error(
									"ERROR stdlib.command.InsertIntoModelCommand - model parameter is required")
						} else {
							if (c == "") {
								throw new Error(
										"ERROR stdlib.command.InsertIntoModelCommand - model parameter must be a non-empty string")
							}
							if (typeof c != "string") {
								throw new Error(
										"ERROR stdlib.command.InsertIntoModelCommand - model parameter must be type String")
							} else {
								if (!mojo.Model.contains(c)) {
									throw new Error(
											"ERROR stdlib.command.InsertIntoModelCommand - specified model does not exist")
								} else {
									e = mojo.Model.get(c).length;
									if (typeof e != "number") {
										throw new Error(
												"ERROR stdlib.command.InsertIntoModelCommand - specified model must be type Array")
									}
								}
							}
						}
						if (j == null || typeof j == "undefined") {
							throw new Error(
									"ERROR stdlib.command.InsertIntoModelCommand - value is not set")
						}
						if (f != null) {
							if (typeof f != "number") {
								throw new Error(
										"ERROR stdlib.command.InsertIntoModelCommand - index parameter must be type Number")
							} else {
							}
						}
						var b = mojo.Model.get(c);
						if (b.length != 0) {
							if (typeof f == "undefined" || f < 0
									|| f >= b.length) {
								var d = b.length
							} else {
								var d = f
							}
						} else {
							var d = 0
						}
						if (b.length == 0) {
							mojo.Model.add(c, j)
						} else {
							if (d == b.length - 1) {
								mojo.Model.add(c, j)
							} else {
								b.splice(d, 0, j);
								mojo.Model.set(c, b)
							}
						}
					},
					onResponse : function(a) {
					},
					onError : function(a) {
					}
				});
dojo.provide("stdlib.command.MapControllersCommand");
dojo.require("mojo.command.Command");
dojo.declare("stdlib.command.MapControllersCommand", mojo.command.Command, {
	execute : function(b) {
		console.log("MapControllersCommand on contextObj: ",
				b.getParams().contextObj);
		var a = null;
		if (b.getParams()) {
			a = b.getParams().contextObj
		}
		mojo.controller.Map.mapControllers(a)
	}
});
dojo.provide("stdlib.command.RemoveFromModelCommand");
dojo.require("mojo.command.Command");
dojo.require("mojo.Model");
dojo
		.declare(
				"stdlib.command.RemoveFromModelCommand",
				mojo.command.Command,
				{
					execute : function(a) {
						var e;
						var g;
						var l;
						var k;
						var d = true;
						var f;
						var j = false;
						var c = false;
						var h = a.getParams();
						if (!h) {
							h = {}
						}
						if (h.model != null) {
							e = h.model
						}
						if (h.index != null) {
							g = h.index
						}
						if (h.value != null) {
							k = h.value
						}
						if (h.key != null) {
							l = h.key
						}
						if (h.firstOnly != null) {
							d = h.firstOnly
						}
						if (e == null || typeof e == "undefined") {
							throw new Error(
									"ERROR stdlib.command.RemoveFromModelCommand - model parameter is required")
						} else {
							if (e == "") {
								throw new Error(
										"ERROR stdlib.command.RemoveFromModelCommand - model parameter must be a non-empty string")
							} else {
								if (typeof e != "string") {
									throw new Error(
											"ERROR stdlib.command.RemoveFromModelCommand - model parameter must be type String")
								} else {
									if (!mojo.Model.contains(e)) {
										throw new Error(
												"ERROR stdlib.command.RemoveFromModelCommand - specified model does not exist")
									} else {
										f = mojo.Model.get(e).length;
										if (typeof f != "number") {
											throw new Error(
													"ERROR stdlib.command.RemoveFromModelCommand - specified model must be type Array")
										}
									}
								}
							}
						}
						if (g == null || typeof g == "undefined") {
							if ((l == null || typeof l != "string" || l == "")
									|| (k == null || typeof k == "undefined" || k == "")) {
								if (l == null || typeof l == "undefined") {
									throw new Error(
											"ERROR stdlib.command.RemoveFromModelCommand - either [index] parameter or [key and value] parameters are required")
								} else {
									if (l == "") {
										throw new Error(
												"ERROR stdlib.command.RemoveFromModelCommand - key parameter must be a non-empty string")
									} else {
										if (typeof l != "string") {
											throw new Error(
													"ERROR stdlib.command.RemoveFromModelCommand - key parameter must be type String")
										} else {
											if (k == null
													|| typeof k == "undefined") {
												throw new Error(
														"ERROR stdlib.command.RemoveFromModelCommand - either [index] parameter or [key and value] parameters are required")
											}
										}
									}
								}
							}
						} else {
							if ((l != null) && (typeof l != "undefined")
									&& (l == "")) {
								throw new Error(
										"ERROR stdlib.command.RemoveFromModelCommand - key parameter must be a non-empty string")
							}
							if (typeof g != "number") {
								throw new Error(
										"ERROR stdlib.command.RemoveFromModelCommand - index parameter must be type Number")
							} else {
								if (g < 0) {
									throw new Error(
											"ERROR stdlib.command.RemoveFromModelCommand - index parameter cannot be less than zero")
								} else {
									if (mojo.Model.contains(e)) {
										if (g >= mojo.Model.get(e).length) {
											throw new Error(
													"ERROR stdlib.command.RemoveFromModelCommand - index parameter is out of bounds")
										}
									}
								}
							}
						}
						var b = mojo.Model.get(e);
						if ((l != null) && (typeof l != "undefined")
								&& (l != "") && (k != null)
								&& (typeof k != "undefined") && (k != "")) {
							if (d) {
								for (i = 0; i < b.length; i++) {
									if (typeof b[i][l] != "undefined") {
										if (b[i][l] == k) {
											b.splice(i, 1);
											mojo.Model.set(e, b);
											break
										}
									}
								}
							} else {
								for (i = b.length - 1; i >= 0; i--) {
									if (typeof b[i][l] != "undefined") {
										if (b[i][l] == k) {
											b.splice(i, 1);
											c = true
										}
									}
								}
								if (c) {
									mojo.Model.set(e, b)
								}
							}
						} else {
							if ((g != null) && (typeof g != "undefined")
									&& (typeof g == "number")) {
								b.splice(g, 1);
								mojo.Model.set(e, b)
							}
						}
					},
					onResponse : function(a) {
					},
					onError : function(a) {
					}
				});
dojo.provide("stdlib.command.RemoveObjectsCommand");
dojo.declare("stdlib.command.RemoveObjectsCommand", mojo.command.Command, {
	execute : function(f) {
		var a;
		var c;
		var e;
		var d = f.paramsObj;
		if (d) {
			if (d.className != null) {
				a = d.className
			}
			if (d.targetId != null) {
				c = d.targetId
			}
		}
		if ((a != null) && (c != null)) {
			if (c.indexOf("#") == 0) {
				c.substring(1, c.length)
			}
			e = mojo.query(a, c);
			if (e) {
				if (e.length > 0) {
					for (var b = 0; b < e.length; b++) {
						if ((e[b]) && (e[b].parentNode)) {
							e[b].parentNode.removeChild(e[b])
						}
					}
				} else {
					if ((e) && (e.parentNode)) {
						e.parentNode.removeChild(e)
					}
				}
			}
		}
	}
});
dojo.provide("stdlib.command.SetModelCommand");
dojo.require("mojo.command.Command");
dojo.require("mojo.Model");
dojo
		.declare(
				"stdlib.command.SetModelCommand",
				mojo.command.Command,
				{
					execute : function(c) {
						var a = c.paramsObj.model;
						var b = c.paramsObj.set;
						if (a == null || typeof a == "undefined") {
							throw new Error(
									"ERROR stdlib.command.SetModelCommand - model parameter is required")
						} else {
							if (typeof a == "string") {
								if (a == "") {
									throw new Error(
											"ERROR stdlib.command.SetModelCommand - model parameter must be a non-empty string")
								}
							} else {
								throw new Error(
										"ERROR stdlib.command.SetModelCommand - model parameter must be type String")
							}
						}
						if (!b) {
							b = mojo.Model.get(a)
						}
						mojo.Model.set(a, b);
						c.paramsObj.set = null
					}
				});
dojo.provide("stdlib.command.UpdateControllerParamCommand");
dojo.require("mojo.command.Command");
dojo.declare("stdlib.command.UpdateControllerParamCommand",
		mojo.command.Command, {
			execute : function(g) {
				var f;
				var c;
				var d;
				var b;
				var e = g.getParams();
				if (e) {
					if (e.element != null) {
						f = e.element
					}
					if (e.control != null) {
						c = e.control
					}
					if (e.params != null) {
						d = e.params
					}
					if (e.value != null) {
						b = e.value
					}
				}
				try {
					if ((c != null) && (d != null) && (b != null)) {
						if (f) {
							if (f.mojoControllers[c]) {
								f.mojoControllers[c].setValue(d, b)
							}
						} else {
							g.getController().getContextController(c).setValue(
									d, b)
						}
					}
				} catch (a) {
				}
			},
			onResponse : function() {
			},
			onError : function() {
			}
		});
dojo.provide("stdlib.command.UpdateObserversCommand");
dojo.require("mojo.controller.Controller");
dojo.require("mojo.command.Command");
dojo.declare("stdlib.command.UpdateObserversCommand", mojo.command.Command, {
	execute : function(b) {
		var a = setTimeout(function() {
			mojo.controller.Controller
					.updateObservers(b.getParams().controllerName);
			clearTimeout(a)
		}, 20)
	}
});
dojo.provide("stdlib.controller.AccordianController");
dojo.require("mojo.controller.Controller");
dojo
		.declare(
				"stdlib.controller.AccordianController",
				mojo.controller.Controller,
				{
					params : {
						selectedIndex : {
							required : false,
							defaultValue : 0,
							type : Number
						},
						activeOn : {
							required : false,
							defaultValue : "onclick"
						},
						toggleClose : {
							required : false,
							defaultValue : false
						},
						direction : {
							required : false,
							defaultValue : "vertical"
						}
					},
					addObservers : function() {
						var c = mojo.query("> .accordian-panel", this
								.getContextElement());
						var a = mojo.query("> .accordian-panel > .accordian",
								this.getContextElement());
						var b = mojo.query(
								"> .accordian-panel > .accordian-content", this
										.getContextElement());
						this
								.addObserver(
										"> .accordian-panel > .accordian",
										this.getValue("activeOn"),
										"UpdateClass",
										function(h, e) {
											var g = a;
											var d = 0;
											for (var f = 0; f < g.length; f++) {
												if (g[f] == e) {
													d = f;
													break
												}
											}
											if (this.getController().getValue(
													"toggleClose")
													&& d == this
															.getController()
															.getValue(
																	"selectedIndex")) {
												this.getController().setValue(
														"selectedIndex", -1)
											} else {
												this.getController().setValue(
														"selectedIndex", d)
											}
										});
						this
								.addObserver(
										this.getConfig("params").selectedIndex,
										"onChange",
										"Tween",
										function(f, e, d) {
											return {
												height : (d
														.getValue("direction") == "vertical") ? 0
														: null,
												width : (d
														.getValue("direction") == "horizontal") ? 0
														: null,
												element : mojo
														.query(
																"> .open > .accordian-content",
																f)
											}
										});
						this.addObserver(
								this.getConfig("params").selectedIndex,
								"onChange", "UpdateClass", function(e, d) {
									return {
										element : c,
										action : "remove",
										cssClass : "open"
									}
								});
						this.addObserver(
								this.getConfig("params").selectedIndex,
								"onChange", "UpdateClass", function(e, d) {
									return {
										element : c[d.getValue()],
										action : "add",
										cssClass : "open"
									}
								});
						this
								.addObserver(
										this.getConfig("params").selectedIndex,
										"onChange",
										"Tween",
										function(f, e, d) {
											var g = b[e.getValue()];
											if (!g) {
												return
											}
											return {
												element : g,
												height : (d
														.getValue("direction") == "vertical") ? g.scrollHeight
														: null,
												width : (d
														.getValue("direction") == "horizontal") ? g.scrollWidth
														: null
											}
										})
					},
					addCommands : function() {
						this.addCommand("UpdateClass",
								"stdlib.behavior.UpdateCssClassBehavior");
						this.addCommand("Tween",
								"stdlib.behavior.TweenBehavior")
					},
					addIntercepts : function() {
					}
				});
dojo.provide("stdlib.controller.AutoSuggestController");
dojo.require("mojo.controller.Controller");
dojo
		.declare(
				"stdlib.controller.AutoSuggestController",
				mojo.controller.Controller,
				{
					params : {
						model : {
							required : false,
							defaultValue : "suggestions"
						},
						modelPath : {
							required : false,
							defaultValue : "suggestions"
						},
						serviceLocator : {
							required : true,
							defaultValue : "cox.service.Locator"
						},
						serviceName : {
							required : false,
							defaultValue : "getSuggestions"
						},
						maxSuggestions : {
							required : false,
							defaultValue : "5"
						},
						doQuery : {
							defaultValue : true,
							type : Boolean
						}
					},
					addObservers : function() {
						this.addObserver("input.suggest-input", "onkeyup",
								"GetSuggestions", function(c, b, a) {
									if (a.getValue("doQuery")) {
										return {
											inputValue : b.value,
											model : this.getController()
													.getValue("model"),
											modelPath : this.getController()
													.getValue("modelPath"),
											serviceLocator : this
													.getController().getValue(
															"serviceLocator"),
											serviceName : this.getController()
													.getValue("serviceName"),
											maxSuggestions : this
													.getController().getValue(
															"maxSuggestions")
										}
									}
								});
						this.addObserver("input.suggest-input", "onkeydown",
								"SuggestNavigation", function(b, a) {
									return {
										suggestions : mojo.query(".suggestion",
												b)
									}
								});
						this.addObserver(this.getCommand("SuggestNavigation"),
								"onNav", "UpdateClass", function(b, a) {
									return {
										element : mojo.query(".suggestion", b),
										action : "remove",
										cssClass : "selected"
									}
								});
						this.addObserver(this.getCommand("SuggestNavigation"),
								"onNav", "UpdateClass", function(b, a) {
									return {
										element : a.suggestion,
										action : "add",
										cssClass : "selected"
									}
								});
						this.addObserver(".suggestion", "onmouseover",
								"UpdateClass", function(b, a) {
									return {
										element : a,
										action : "add",
										cssClass : "selected"
									}
								});
						this.addObserver(".suggestion", "onmouseout",
								"UpdateClass", function(b, a) {
									return {
										element : a,
										action : "remove",
										cssClass : "selected"
									}
								});
						this.addObserver(".suggestion a", "onclick",
								"PreventDefault");
						this.addObserver(".suggestion a", "onmouseover",
								"UpdateClass", function(c, b) {
									var a = mojo.queryFirst(
											"input.suggest-input", c);
									a.value = b.innerHTML.replace(
											/<\/?[^>]+(>|$)/g, "")
								});
						this.addObserver(this.getCommand("SuggestNavigation"),
								"onNav", "UpdateClass", function(e, d, c) {
									c.setValue("doQuery", false);
									var b = mojo.queryFirst(
											"input.suggest-input", e);
									var a = $.trim(d.suggestion.innerHTML);
									b.value = a.replace(/<\/?[^>]+(>|$)/g, "")
								});
						this.addObserver("input.suggest-input", "onblur",
								"ClearModel", function(b, a) {
									return {
										model : this.getController().getValue(
												"model")
									}
								})
					},
					addCommands : function() {
						this.addCommand("PreventDefault",
								"stdlib.behavior.PreventDefaultEventBehavior");
						this
								.addCommand("SuggestNavigation",
										"stdlib.behavior.AutoSuggest.SuggestNavigationBehavior");
						this.addCommand("UpdateClass",
								"stdlib.behavior.UpdateCssClassBehavior");
						this
								.addCommand("GetSuggestions",
										"stdlib.command.AutoSuggest.GetSuggestionsCommand");
						this.addCommand("ClearModel",
								"stdlib.command.ClearModelCommand")
					},
					addIntercepts : function() {
					}
				});
dojo.provide("stdlib.controller.DialogController");
dojo.require("mojo.controller.Controller");
dojo
		.declare(
				"stdlib.controller.DialogController",
				mojo.controller.Controller,
				{
					params : {
						container : {
							required : false,
							defaultValue : ".dialog-component",
							type : String
						},
						title : {
							required : false,
							defaultValue : ".dialog-component .dialog-component-title",
							type : String
						},
						titleText : {
							required : false,
							defaultValue : "Hello World",
							type : String
						},
						content : {
							required : false,
							defaultValue : ".dialog-component .dialog-component-content",
							type : String
						},
						width : {
							defaultValue : 0,
							type : Number
						},
						height : {
							defaultValue : 0,
							type : Number
						}
					},
					addObservers : function() {
						var c = this.getValue("content"), d = this
								.getValue("title"), b = this
								.getValue("container"), a = this
								.getValue("titleText");
						this.addObserver(mojo.Messaging.getTopic("dialog"),
								"onPublish", "Dialog", function(g, f) {
									var e = f.getMessage();
									e.elContainer = b;
									e.elContent = c;
									e.elTitle = d;
									if (!e.title) {
										e.title = a
									}
									this.getController().setValue("width",
											e.width);
									this.getController().setValue("height",
											e.height);
									mojo.Model.set("stlib.dialog.params", e);
									return e
								});
						this.addObserver(this.getCommand("Dialog"),
								"onComplete", "MapControllers", function() {
									return {
										contextObj : mojo.queryFirst(this
												.getController().getValue(
														"container"))
									}
								});
						this
								.addObserver(
										this.getCommand("Dialog"),
										"onComplete",
										"UpdateObservers",
										function(f, e) {
											mojo.Messaging
													.publish("dialogLaunchCompleted");
											return {
												controllerName : this
														.getController().declaredClass
											}
										});
						this.addObserver(this.getCommand("Dialog"),
								"onDataReady", "Position");
						this.addObserver(window, "onresize", "Position");
						this.addObserver(mojo.queryFirst(".btn-close"),
								"onclick", "Messaging", function(f, e) {
									return {
										topic : "dialog",
										message : {
											enabled : false
										}
									}
								})
					},
					addCommands : function() {
						this.addCommand("ClearModel",
								"stdlib.command.ClearModelCommand");
						this.addCommand("Messaging",
								"stdlib.behavior.MessagingBehavior");
						this.addCommand("Dialog",
								"stdlib.behavior.dialog.DialogBehavior");
						this.addCommand("Position",
								"stdlib.behavior.dialog.PositionBehavior");
						this.addCommand("MapControllers",
								"stdlib.command.MapControllersCommand");
						this.addCommand("UpdateObservers",
								"stdlib.command.UpdateObserversCommand")
					},
					addIntercepts : function() {
					}
				});
dojo.provide("stdlib.controller.FilmStripController");
dojo.require("mojo.controller.Controller");
dojo
		.declare(
				"stdlib.controller.FilmStripController",
				mojo.controller.Controller,
				{
					params : {
						selectedIndex : {
							required : false,
							defaultValue : 0,
							type : Number
						},
						loop : {
							required : false,
							defaultValue : false,
							type : Boolean
						}
					},
					addObservers : function() {
						var a = function(b) {
							return mojo
									.query(
											"> .filmstrip-viewer > .filmstrip-content > .filmstrip-page",
											b)
						};
						this.addObserver("> .filmstrip-next", "onclick",
								"UpdateClass", function(e, c) {
									var d = a(e);
									var b = this.getController().getValue(
											"selectedIndex");
									b++;
									if (b >= a(e).length) {
										if (this.getController().getValue(
												"loop")) {
											this.getController().setValue(
													"selectedIndex", 0)
										}
									} else {
										this.getController().setValue(
												"selectedIndex", b)
									}
								});
						this.addObserver("> .filmstrip-prev", "onclick",
								"UpdateClass", function(e, c) {
									var d = a(e);
									var b = this.getController().getValue(
											"selectedIndex");
									b--;
									if (b < 0) {
										if (this.getController().getValue(
												"loop")) {
											this.getController().setValue(
													"selectedIndex",
													a(e).length - 1)
										}
									} else {
										this.getController().setValue(
												"selectedIndex", b)
									}
								});
						this
								.addObserver(
										this.getConfig("params").selectedIndex,
										"onChange",
										"UpdateClass",
										function(d, c, b) {
											return {
												element : mojo.query(
														"> .filmstrip-next", d),
												action : (c.getValue() >= a(d).length - 1) ? "add"
														: "remove",
												cssClass : "disabled"
											}
										});
						this.addObserver(
								this.getConfig("params").selectedIndex,
								"onChange", "UpdateClass", function(d, c, b) {
									return {
										element : mojo.query(
												"> .filmstrip-prev", d),
										action : (c.getValue() <= 0) ? "add"
												: "remove",
										cssClass : "disabled"
									}
								});
						this
								.addObserver(
										this.getConfig("params").selectedIndex,
										"onChange",
										"Tween",
										function(d, c, b) {
											return {
												x : (-1 * a(d)[c.getValue()].offsetLeft),
												y : (-1 * a(d)[c.getValue()].offsetTop),
												element : mojo
														.query(
																"> .filmstrip-viewer > .filmstrip-content",
																d)
											}
										});
						this.addObserver(
								this.getConfig("params").selectedIndex,
								"onChange", "UpdateClass", function(c, b) {
									return {
										element : a(c),
										action : "remove",
										cssClass : "selected"
									}
								});
						this.addObserver(
								this.getConfig("params").selectedIndex,
								"onChange", "UpdateClass", function(c, b) {
									return {
										element : a(c)[b.getValue()],
										action : "add",
										cssClass : "selected"
									}
								})
					},
					addCommands : function() {
						this.addCommand("UpdateClass",
								"stdlib.behavior.UpdateCssClassBehavior");
						this.addCommand("Tween",
								"stdlib.behavior.TweenBehavior")
					},
					addIntercepts : function() {
					}
				});
dojo.provide("stdlib.controller.TabController");
dojo.require("mojo.controller.Controller");
dojo.declare("stdlib.controller.TabController", mojo.controller.Controller, {
	params : {
		selectedIndex : {
			required : false,
			defaultValue : 0,
			type : Number
		},
		activeOn : {
			required : false,
			defaultValue : "onclick"
		}
	},
	addObservers : function() {
		this.addObserver("> .tabs-nav > .tab", this.getValue("activeOn"),
				"UpdateClass", function(e, b) {
					var d = mojo.query("> .tabs-nav > .tab", e);
					var a = 0;
					for (var c = 0; c < d.length; c++) {
						if (d[c] == b) {
							a = c;
							break
						}
					}
					this.getController().setValue("selectedIndex", a)
				});
		this.addObserver(this.getConfig("params").selectedIndex, "onChange",
				"UpdateClass", function(b, a) {
					return {
						element : mojo.query("> .tabs-nav > .selected", b),
						action : "remove",
						cssClass : "selected"
					}
				});
		this.addObserver(this.getConfig("params").selectedIndex, "onChange",
				"UpdateClass", function(b, a) {
					return {
						element : mojo.query("> .tabs-content > .selected", b),
						action : "remove",
						cssClass : "selected"
					}
				});
		this.addObserver(this.getConfig("params").selectedIndex, "onChange",
				"UpdateClass", function(b, a) {
					return {
						element : mojo.query("> .tabs-nav > .tab", b)[a
								.getValue()],
						action : "add",
						cssClass : "selected"
					}
				});
		this.addObserver(this.getConfig("params").selectedIndex, "onChange",
				"UpdateClass", function(b, a) {
					return {
						element : mojo.query("> .tabs-content > .tab-content",
								b)[a.getValue()],
						action : "add",
						cssClass : "selected"
					}
				});
		this.addObserver("> .add", "onclick", "UpdateClass", function(b, a) {
			mojo.Model.add("testData", {
				name : "new",
				description : (new Date()).getTime()
			});
			this.getController().setValue("selectedIndex", 0);
			this.getController().getConfig("params").selectedIndex.onChange()
		})
	},
	addCommands : function() {
		this
				.addCommand("UpdateClass",
						"stdlib.behavior.UpdateCssClassBehavior")
	},
	addIntercepts : function() {
	}
});
dojo.provide("stdlib.controller.TemplateController");
dojo.require("mojo.controller.Controller");
dojo.require("lib.trimpath.template");
dojo.require("mojo.Model");
dojo.declare("stdlib.controller.TemplateController",
		mojo.controller.Controller, {
			modelSource : "",
			_modelSourceHandle : null,
			templateObj : null,
			escapeQuotes : false,
			escapeHtml : false,
			onInit : function() {
				var a = this.getContextElement();
				var b = this._normalize(a.innerHTML);
				this.templateObj = TrimPath.parseTemplate(b);
				$(this.getContextElement()).css("display", "none");
				this.setModelSource(a.getAttribute("modelsource")
						|| a.getAttribute("data-modelsource"))
			},
			getModelSource : function() {
				if (!this.modelSource) {
					return ""
				}
				return this.modelSource
			},
			setModelSource : function(a) {
				if (this._modelSourceHandle) {
					mojo.Model.removeObserver(this._modelSourceHandle)
				}
				this.modelSource = a;
				this._modelSourceHandle = mojo.Model.addObserver(
						this.modelSource, this, "onModelUpdate");
				this.onModelUpdate()
			},
			onModelUpdate : function() {
				this._bindToModel()
			},
			_bindToModel : function() {
				var h = {
					escapeQuotes : function(l) {
						l = l.toString();
						l = l.replace(/\"/g, "&#34;");
						l = l.replace(/\'/g, "&#39;");
						return l
					}
				};
				var e = this.getModelSource();
				if (e.length > 0 && mojo.Model.contains(e)
						&& this.getContextElement()) {
					var j = mojo.Model.get(e);
					var k = new Array();
					if (!$.isArray(j)) {
						j = [ j ]
					}
					var c = j.length;
					for (var d = 0, f = c; d < f; d++) {
						if (j[d]) {
							if (typeof (j[d]) != "object") {
								var b = j[d].toString();
								j[d] = new Object();
								j[d].data = b
							}
							j[d].currentIndex = d;
							j[d].totalLength = f;
							if (this.escapeQuotes) {
								j[d]._MODIFIERS = h;
								j[d].content = h.escapeQuotes(j[d].content)
							}
							k.push(this.templateObj.process(j[d]))
						}
					}
					var a = this.getContextElement();
					var g = k.join("");
					a.innerHTML = "";
					a.innerHTML = g;
					$(this.getContextElement()).css("display", "block")
				} else {
					$(this.getContextElement()).css("display", "none")
				}
			},
			_normalize : function(e) {
				var d = /[\!|\$]\{[^\}]*\}/g;
				var b = e.match(d);
				var f = e.split(d);
				var j = new Array();
				var a = 0;
				if (b) {
					a = b.length
				}
				for (var c = 0; c < a; c++) {
					j.push(f[c]);
					var h = "$" + b[c].substring(1);
					var g = "";
					if (this.escapeHtml) {
						g += "|escape"
					}
					if (this.escapeQuotes) {
						g += "|escapeQuotes"
					}
					h = h.substring(0, h.length - 1) + g + "}";
					j.push(h)
				}
				j.push(f[a]);
				return j.join("")
			},
			addObservers : function() {
			},
			addCommands : function() {
			},
			addIntercepts : function() {
			}
		});